import React from 'react';
import styles from './NormalLoginForm.scss';

class NormalLoginForm extends React.Component {
    render() {
        return(
            <div className = {styles.normal_login_form}>
                <div className = {styles.input_box}><input placeholder="아이디를 입력해주세요"/></div>
                <div className = {styles.input_box}><input placeholder="비밀번호를 입력해주세요"/></div>
            </div>
        );
    }
}

export default NormalLoginForm;