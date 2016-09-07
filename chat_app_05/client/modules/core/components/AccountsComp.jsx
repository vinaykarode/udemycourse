import React from 'react';
import { Accounts } from 'meteor/accounts-base';

class AccountsComp extends React.Component {
    render() {
        return (
          <form>
            <div className="col s3 l3 offset-l2">
              <input ref='email' type='text' className='authinput' placeholder='user email'></input>
            </div>
            <div className="col s3 l3">
              <input ref='password' type='text' className='authinput' placeholder='password'></input>
            </div>
            <div className="col s6 l3">
              <input type='submit' className=" waves-effect waves-light authinput authbtn" value='register' onClick={this.register.bind(this)}></input>&nbsp;
              <input type='submit' className=" waves-effect waves-light authinput authbtn" value='login' onClick={this.login.bind(this)} ></input>
            </div>
          </form>
   
        )
    }
    
  
  register(e){
    e.preventDefault();
    const {email, password} = this.refs;
    console.log (email.value, password.value);
    Accounts.createUser({email:email.value, password:password.value}, (error) => {
      if(error){
        console.log(error)
      } else {
        console.log('reistered')
      }
    })
  } 
  
  login(e){
    e.preventDefault();
    const {email, password} = this.refs;
    console.log (email.value, password.value);
    Meteor.loginWithPassword(email.value, password.value, (error) => {
      if(error){
        console.log(error)
      } else {
        console.log('loggedin')
          setTimeout( () => {  
            $('html, body').stop().animate({
              scrollTop: $('.container')[0].scrollHeight
            }, 500);
          }, 1000 );
      }
    })
  }
  
}

export default AccountsComp;