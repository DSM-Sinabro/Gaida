import React from 'react';
import styles from './LoginSub.scss';

class LoginSub extends React.Component {
    render () {
        return(
            <div className = {styles.login_sub}>
                <div className = {styles.find_info}>
                    <div>아이디 찾기</div>/
                    <div>비밀번호 변경</div>
                </div>
                <div className = {styles.join}>
                    회원가입
                </div>
            </div>
        )
    }
}

export default LoginSub;