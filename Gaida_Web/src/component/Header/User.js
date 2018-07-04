import React from 'react';
import styles from './styles.scss';

class User extends React.Component {
  render() {
    return(
      <div className = {styles.user}>
        <div className = {styles.userImg}><img src = {this.props.userimg}/></div>
        <div className = {styles.userName}>홍길동</div>
      </div>
    )
  }
}

export default User;