import React from 'react';

class RegisterForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <form className='col s12'>
                    <div className='input-field col l6 offset-l3 s12'>
                        <input className='vaidate' placeholder='e-mail' id='email' ref='email'></input>
                    </div>
                    <div className='input-field col l6 offset-l3 s12'>
                        <input className='vaidate' placeholder='password' id='password' ref='password'></input>
                    </div>
                    <div className='input-field col l6 offset-l3 s12'>
                        <input className='vaidate' placeholder='confirm password' id='confirmPassword' ref='confirmPassword'></input>
                    </div>
                </form>
            </div>
        )
    }
}
class LoginForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <form className='col s12'>
                    <div className='input-field col l6 offset-l3 s12'>
                        <input className='vaidate' placeholder='e-mail' id='email' ref='email'></input>
                    </div>
                    <div className='input-field col l6 offset-l3 s12'>
                        <input className='vaidate' placeholder='password' id='password' ref='password'></input>
                    </div>
                </form>
            </div>
        )
    }
}

class RegisterLogin extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          login: false,
        };
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.login ? <LoginForm /> : <RegisterForm />}
                    {this.state.login ? <div className='row'><a className='btn col l6 s12 offset-l3' onClick={this.login.bind(this)}>login</a><a className='col l6 s12 offset-l3 center-align' onClick={this.displayregisterform.bind(this)}>create new account</a></div> : <div className='row'><a className='btn col l6 s12 offset-l3' onClick={this.register.bind(this)}>Register account</a><a className='col l6 s12 offset-l3 center-align' onClick={this.displayloginform.bind(this)}>already have an account? sign-in</a></div>}
                    
                </div>
            </div>
            )
    }
    
    login(e){
        e.preventDefault();
        console.log('login');
    }  
    
    displayregisterform(e){
        e.preventDefault();
        this.setState({
          login: false,
        });
    }    
    
    register(e){
        e.preventDefault();
        console.log('register');
    }  
    
    displayloginform(e){
        e.preventDefault();
        this.setState({
          login: true,
        });
    }
};

export default RegisterLogin;