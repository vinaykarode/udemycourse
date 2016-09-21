import React from 'react';
import RegisterForm from '../containers/RegisterForm.js';
import LoginForm from '../containers/LoginForm.js';

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
                    {this.state.login ? <div className='row'><a className='col l6 s12 offset-l3 center-align' onClick={this.displayregisterform.bind(this)}>create new account</a></div> : <div className='row'><a className='col l6 s12 offset-l3 center-align' onClick={this.displayloginform.bind(this)}>already have an account? sign-in</a></div>}
                    
                </div>
            </div>
            )
    }

    displayregisterform(e){
        e.preventDefault();
        this.setState({
          login: false,
        });
    }    

    displayloginform(e){
        e.preventDefault();
        this.setState({
          login: true,
        });
    }
};

export default RegisterLogin;