import React from 'react';
import styles from './LoginSub.scss';
import { Router, Link } from 'react-router-dom';

class LoginSub extends React.Component {
    render () {
        return(
            <div className = {styles.login_sub}>
                <div className = {styles.find_info}>
                    <div>아이디 찾기</div>/
                    <div>비밀번호 변경</div>
                </div>
                <div className = {styles.join}>
                    <Link to = "/join">회원가입</Link>
                </div>
            </div>
        )
    }
}

export default LoginSub;