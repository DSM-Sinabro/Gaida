import React from 'react';
import styles from './WhiteBasicModal.scss'
import StartVideo from './StartVideo';
import LoginForm from './LoginForm';

class WhiteBasicModal extends React.Component {
    render() {
        return(
            <div className = {styles.whitemodal}>
                <StartVideo />
                <LoginForm />
            </div>
        )
    }
}

export default WhiteBasicModal;