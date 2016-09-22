
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

let getImgData = (img) => {
  var extension = 'jpg';
  var type = 'image/jpeg';
  var base64result = img.split(',')[0];
  if (base64result.indexOf("png") > -1) {
    extension = 'png';
    type = 'image/png';
  }

  return {
    extension: extension,
    type: type
  };
}

// let dataURItoBlob = (dataURI) => {
//     var byteString = atob(dataURI.split(',')[1]);
//     var ab = new ArrayBuffer(byteString.length);
//     var ia = new Uint8Array(ab);
//     for (var i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ab], { type: 'image/jpeg' });
// }
//
// let blobToFile = (theBlob) =>{
//     //A Blob() is almost a File() - it's just missing the two properties below which we will add
//     theBlob.lastModifiedDate = new Date();
//     theBlob.name = fileName;
//     filename = Math.floor(Math.random() * (max - min + 1) + min)
//     return theBlob;
// }

let filetransfer = () =>{
  const ft = new FileTransfer();
  const options = new FileUploadOptions();
}
let onSuccess = (imageURI) => {
  const fileName = "" + (new Date()).getTime() + ".jpg";
  Meteor.call('signing', fileName, (err, success) => {
      if (err) {
          console.log(err);
      } else {
          console.log(success);
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


export default {
  uploadPhoto,
  cordovaUploadPhoto
}
