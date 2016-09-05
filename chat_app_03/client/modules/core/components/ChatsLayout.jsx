import React from 'react';

class ChatsLayout extends React.Component {
  render() {
      const {message} = this.props;
      console.log(message);
      return (
        <div>
            {/*<nav className="top-nav">
                  <div className="nav-wrapper">
                        
                  </div>
            </nav>
            */}
            <div className=" container">
              {message.map(mes => (
                <div className=" row" key={mes}>
                  <div className="chip">
                    {mes}
                  </div>
                </div>
              ))}
            </div>
            
            <footer className="footer">
            <div className=" container">
              <div className=" row">
                <form className="col s10">
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea ref="message" id="textarea1" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Message</label>
                    </div>
                  </div>
                </form>
                <div className="col s2">
                    <div className="row hide-on-med-and-down ">
                        <a className="waves-effect waves-light btn send_button" onClick={this.sendMessage.bind(this)}>send <i className="mdi mdi-send right"></i></a>
                    </div>
                    <div className="row hide-on-large-only">
                        <a className="btn-floating btn-large waves-effect waves-light red send_button" onClick={this.sendMessage.bind(this)}><i className="mdi mdi-send right"></i></a>
                    </div>
                </div>
              </div>
            </div>
            </footer>
        </div>
       )
  }
  
  sendMessage(e) {
    e.preventDefault();
    const {message} = this.refs;
    const {send} = this.props;
    send(message.value)
    // console.log(message.value);
  }
}

export default ChatsLayout;
