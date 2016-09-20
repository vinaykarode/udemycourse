import React from 'react';

class Dashboard extends React.Component {
    render(){
        return(
          <div className="fixed-action-btn" style={{'bottom': '45px', 'right': '24px'}}>
            <a className="btn-floating btn-large red">
              <i className="mdi mdi-plus"></i>
            </a>
            <ul>
              <li><a className="btn-floating blue"><i className="mdi mdi-image"></i></a></li>
            </ul>
          </div>    
        )
    }
}

export default Dashboard;