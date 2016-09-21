Slingshot.fileRestrictions("myPhotoUploads", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
});

Slingshot.createDirective("myPhotoUploads", Slingshot.S3Storage, {
  bucket: "photoappvini",

  acl: "public-read",
  region: "eu-west-1",
  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.emails[0].address + "/" + file.name;
  }
});