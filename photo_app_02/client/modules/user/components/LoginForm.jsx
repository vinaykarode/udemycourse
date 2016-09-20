import React from 'react';

class LoginForm extends React.Component {
    componentDidMount() {
        const { validation } = this.props;
        validation('#login');
    }
    
    render() {
        return (
            <div className='row'>
                <form className='col s12' id='login'>
                    <div className=' col l6 offset-l3 s12'>
                        <input className='required email' placeholder='e-mail' id='email' ref='email' name='email'></input>
                    </div>
                    <div className=' col l6 offset-l3 s12'>
                        <input className='required' placeholder='password' id='password' ref='password' name='password'></input>
                    </div>
                    <div className=' col l6 offset-l3 s12'>
                        <input className='btn col l6 s12 offset-l3' onClick={this.login.bind(this)} type='submit' value='sign in'/>
                    </div>
                </form>
            </div>
        )
    }
    
    login(e){
        e.preventDefault();
        const {handleAuth} = this.props;
        const {email, password} = this.refs;
        handleAuth('#login', email.value, password.value);
    }   
    
}

export default LoginForm;