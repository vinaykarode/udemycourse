import React from 'react';

class Dashboard extends React.Component {
    render(){
        return(
          <div>
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