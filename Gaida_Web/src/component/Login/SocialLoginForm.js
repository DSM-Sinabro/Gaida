import React from 'react';
import styles from './SocialLoginForm.scss';

class SocialLoginForm extends React.Component {
    render() {
        return(
            <div className = {styles.social_login_form}>
                <h1>로그인</h1>
                <div className = {styles.social_login}>
                    <div className = {styles.facebook}>
                        <div className = {styles.login_with}>페이스북으로 로그인</div>
                    </div>
                    <div className = {styles.kakao}>
                        <div className = {styles.login_with}>카카오로 로그인</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialLoginForm