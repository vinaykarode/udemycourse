import React from 'react';
import RegisterLogin from '../../user/components/RegisterLogin.jsx'

class Dashboard extends React.Component {
    render(){
    const { photos, currentUser } = this.props;
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
            
            <div className="fixed-action-btn" style={{'bottom': '45px', 'right': '24px'}}>
              <a className="btn-floating btn-large red">
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
          </div>
        )
    }
    
    photoUpload(e){
      e.preventDefault();
      const {uploadPhoto} = this.props;
      let file = e.target.files[0];
      console.log(file)
      uploadPhoto(file);
    }
}

export default Dashboard;