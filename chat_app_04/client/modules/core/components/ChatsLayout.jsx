import React from 'react';
import {Messages} from '/lib/collections/messages-collections';

class ChatsLayout extends React.Component {
  render() {
      const {message} = this.props;
      return (
        <div>
            {/*<nav className="top-nav">
                  <div className="nav-wrapper">
                        
                  </div>
            </nav>
            */}
            <div className=" container" id ='messages'>
              {message.map(mes => (
                <div className=" row" key={mes._id}>
                  <div className="chip">
                    {mes.message}
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
    Messages.insert({'message':message.value});
    message.value = '';
    $('html, body').stop().animate({
      scrollTop: $('.container')[0].scrollHeight
    }, 1000);
    // console.log(message.value);
  }
}

export default ChatsLayout;
