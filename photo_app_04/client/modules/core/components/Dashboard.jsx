import React from 'react';
import RegisterLogin from '../../user/components/RegisterLogin.jsx'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          openFAB: true,
        };
    }
    render(){
    const { photos, currentUser, isCordova } = this.props;
    let fab;
      if(isCordova){
        fab = (
          <div className="fixed-action-btn" style={{'bottom': '45px', 'right': '24px'}}>
            <a className="btn-floating btn-large red" onTouchEnd={this.openfab.bind(this)}>
              <i className="mdi mdi-plus"></i>
            </a>
            <ul>
              <li><label className="photoUpload" onTouchEnd={this.getLibraryImage.bind(this)}>
                    <input type="file" required/>
                    <a className="btn-floating blue"><i className="mdi mdi-image"></i></a>
                   </label>
              </li>
              <li><label className="photoUpload" onTouchEnd={this.getCameraImage.bind(this)}>
                    <input type="file" required />
                    <a className="btn-floating green"><i className="mdi mdi-camera"></i></a>
                   </label>
              </li>
            </ul>
          </div>
        )
      } else {
        fab = (
          <div className="fixed-action-btn" style={{'bottom': '45px', 'right': '24px'}}>
            <a className="btn-floating btn-large red" onClick={this.openfab.bind(this)}>
              <i className="mdi mdi-plus"></i>
            </a>
            <ul>
              <li><label className="photoUpload">
                    <input type="file" required onChange={this.photoUpload.bind(this)}/>
                    <a className="btn-floating blue"><i className="mdi mdi-image"></i></a>
                   </label>
              </li>
            </ul>
          </div>
        )
      }
        return(
          <div>

              {currentUser ? null :<RegisterLogin />}

              {photos.map(photo => (
                <div className="col s12 m6 l3"  key={photo._id}>
                  <div className="card grey lighten-5">
                    <div className="card-image">
                      <img src={photo.photoUrl}></img>
                    </div>
                  </div>
                </div>
              ))}

            <div className="top-loading-bar" id="loadingBar"></div>

            {fab}
          </div>
        )
    }

    openfab(){
      if(this.state.openFAB){
        $('.fixed-action-btn').openFAB();
        this.setState({openFAB:!this.state.openFAB})
      }else {
        $('.fixed-action-btn').closeFAB();
        this.setState({openFAB:!this.state.openFAB})
      }
    }

    photoUpload(e){
      e.preventDefault();
      const {uploadPhoto} = this.props;
      let file = e.target.files[0];
      console.log(file)
      uploadPhoto(file);
    }

    getLibraryImage(e){
      e.preventDefault();
      const {cordovaUploadPhoto} = this.props;
      cordovaUploadPhoto();
    }

    getCameraImage(e){
      e.preventDefault();
      // const {cordovaUploadPhoto} = this.props;
      // cordovaUploadPhoto();
    }
}

export default Dashboard;
