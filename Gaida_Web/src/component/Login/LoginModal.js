import React from 'react';
import styles from './LoginModal.scss'
import StartVideo from '../assets/StartVideo';
import LoginForm from './LoginForm';
import SocialLoginForm from './SocialLoginForm';

class LoginModal extends React.Component {
    render() {
        return(
            <div className = {styles.loginModal}>
                <div className = {styles.whitemodal}>
                    <StartVideo />
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default LoginModal;