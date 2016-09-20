
export default {
    uploadPhoto({Meteor, LocalState, FlowRouter}, file) {
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
        uploader.send(file, function (error, downloadUrl) {
            computation.stop();
            if (error) {
                // Log service detailed response.
                console.error('Error uploading', uploader.xhr.response);
                alert (error);
            }
            else {
                if(uploader_progress == 1){
                    bar.destroy()
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
}




 