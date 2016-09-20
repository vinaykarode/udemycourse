import React from 'react';

class RegisterForm extends React.Component {
    componentDidMount() {
        const { validation } = this.props;
        validation('#register');
    }
    
    render() {
        return (
            <div className='row'>
                <form className='col s12' id='register'>
                    <div className='col l6 offset-l3 s12'>
                        <input className='required email' placeholder='e-mail' ref='email' name='email'></input>
                    </div>
                    <div className='col l6 offset-l3 s12'>
                        <input className='required' placeholder='password' ref='password' name='password' id='password'></input>
                    </div>
                    <div className='col l6 offset-l3 s12'>
                        <input className='' placeholder='confirm password' ref='confirmPassword' name='confirmPassword'></input>
                    </div>
                    <div className='col l6 offset-l3 s12'>
                        <input className='btn col l6 s12 offset-l3' onClick={this.register.bind(this)} type='submit' value='create account'/>
                    </div>
                </form>
            </div>
        )
    }
        
    register(e){
        e.preventDefault();
        const {handleAuth} = this.props;
        const {email, password, confirmPassword} = this.refs;
        handleAuth('#register', email.value, password.value, confirmPassword.value);
    }  
    
}

export default RegisterForm;