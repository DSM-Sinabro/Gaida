import React, { Component } from 'react';
import styles from './Join.scss';

class JoinButtSub extends Component {
  render() {
    return(
      <div className = {styles.joinbuttSub}>
        <div>아이디찾기 / 비밀번호 변경</div>
        <div>로그인</div>
      </div>
    )
  }
}

export default JoinButtSub