import React from 'react';
import styles from '../assets/assets.scss';
import StartVideo from '../assets/StartVideo';
import LoginForm from './LoginForm';
import SocialLoginForm from './SocialLoginForm';

class Modal extends React.Component {
    render() {
        return(
            <div className = {styles.Modal}>
                <div className = {styles.whitemodal}>
                    <StartVideo />
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default Modal;