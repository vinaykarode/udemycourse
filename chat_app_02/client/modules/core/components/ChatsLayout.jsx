import React from 'react';

class ChatsLayout extends React.Component {
  render() {
      return (
        <div>
            {/*<nav className="top-nav">
                  <div className="nav-wrapper">
                        
                  </div>
            </nav>
            */}
            
            <footer className="footer">
            <div className=" container">
              <div className=" row">
                <form className="col s10">
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="textarea1" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Message</label>
                    </div>
                  </div>
                </form>
                <div className="col s2">
                    <div className="row hide-on-med-and-down ">
                        <a className="waves-effect waves-light btn send_button">send <i className="mdi mdi-send right"></i></a>
                    </div>
                    <div className="row hide-on-large-only">
                        <a className="btn-floating btn-large waves-effect waves-light red send_button"><i className="mdi mdi-send right"></i></a>
                    </div>
                </div>
              </div>
            </div>
            </footer>
        </div>
       )
  }

}

export default ChatsLayout;
