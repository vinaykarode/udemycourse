
let uploadPhoto = ({Meteor, LocalState, FlowRouter}, file) => {
    const uploader = new Slingshot.Upload("myPhotoUploads");

    let bar = new ProgressBar.Line(document.getElementById('loadingBar'), {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 100,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#FFEA82'},
      to: {color: '#ED6A5A'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
    });

    let uploader_progress = 0
    // onSuccess(file);
    uploader.send(file, function (error, downloadUrl) {
        computation.stop();
        if (error) {
            console.error('Error uploading', uploader.xhr.response);
            alert (error);
        }
        else {
            if(uploader_progress == 1){
            Meteor.call('photos.uploaded', downloadUrl, (err, success) => {
                if (err) {
                    return LocalState.set('PHOTO_UPDATE_ERROR', err.message);
                } else {
                    bar.destroy()
                }
            })
            }
        }
    });



  //Track Progress
  let computation = Tracker.autorun(() => {
      if(!isNaN(uploader.progress())) {
        LocalState.set('UPLOADER_PROGRESS', Math.round(uploader.progress() * 100));
        uploader_progress = Math.round(uploader.progress());
        bar.animate(uploader_progress);
      }
  });

}


let filetransfer = (data, imageURI) =>{
  console.log(data);
  console.log(imageURI);
  const ft = new FileTransfer();
  const options = new FileUploadOptions();
  options.fileKey = "file";
  options.fileName = data.filename;
  options.mimeType = "image/jpeg";
  options.chunkedMode = false;
  options.params = {
      "key": data.folder + data.filename,
      "AWSAccessKeyId": data.awsKey,
      "acl": "public-read",
      "policy": data.policy,
      "signature": data.signature,
      "Content-Type": "image/jpeg"
  };

  ft.upload(imageURI, "https://" + data.bucket + ".s3.amazonaws.com/",
      function (success) {
          downloadUrl = success.headers.Location;
          Meteor.call('photos.uploaded', downloadUrl, (err, success) => {
              if (err) {
                  return LocalState.set('PHOTO_UPDATE_ERROR', err.message);
              } else {

              }
          })
      },
      function (error) {
          alert("Upload failed");
          console.log(error.body);
      }, options);

}

let onSuccess = (imageURI) => {
  const fileName = "" + (new Date()).getTime() + ".jpg";
  const email = Meteor.user().emails[0].address
  Meteor.call('signing', fileName, email, (err, success) => {
      if (err) {
          console.log(err);
      } else {
          filetransfer(success, imageURI, fileName, email);
      }
  })
}


let cordovaUploadPhoto = ({Meteor, LocalState, FlowRouter}) =>{

  let onFail = (message) => {
      alert('Failed because: ' + message);
  }
  const options = {
    quality: 45,
    targetWidth: 1000,
    targetHeight: 1000,
    destinationType: Camera.DestinationType.FILE_URI,
    encodingType: Camera.EncodingType.JPEG,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
  };
  navigator.camera.getPicture(onSuccess, onFail, options);
}

let cordovaCameraUploadPhoto = ({Meteor, LocalState, FlowRouter}) =>{

  let onFail = (message) => {
      alert('Failed because: ' + message);
  }
  const options = {
    quality: 45,
    targetWidth: 1000,
    targetHeight: 1000,
    destinationType: Camera.DestinationType.FILE_URI,
    encodingType: Camera.EncodingType.JPEG,
    sourceType: Camera.PictureSourceType.CAMERA,
  };
  navigator.camera.getPicture(onSuccess, onFail, options);
}


export default {
  uploadPhoto,
  cordovaUploadPhoto,
  cordovaCameraUploadPhoto
}
