import React, { Component } from 'react';
import styles from './Join.scss';
import { Link } from 'react-router-dom';

class JoinButtSub extends Component {
  render() {
    return(
      <div className = {styles.joinbuttSub}>
        <div>
          <div>아이디 찾기 </div>
          <div>/ 비밀번호 찾기</div>
        </div>
        <Link to = "/login">로그인</Link>
      </div>
    )
  }
}

export default JoinButtSub