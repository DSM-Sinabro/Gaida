import React from 'react';
import styles from './AuthModal.scss'
import WhiteBasicModal from './WhiteBasicModal'
class AuthModal extends React.Component {
    render() {
        return(
            <div className = {styles.auth_modal}>
                <WhiteBasicModal />
            </div>
        )
    }
}

export default AuthModal