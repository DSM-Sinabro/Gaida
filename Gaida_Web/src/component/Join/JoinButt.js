import React, { Component } from 'react';
import styles from './Join.scss';
import JoinButtSub from './JoinButtSub';
import { Router, Link } from 'react-router-dom';

class JoinButt extends Component {
  render() {
    return(
      <React.Fragment >
        <Link to = "/setinterest" className = {styles.joinButt}>Join</Link>
        <JoinButtSub />
      </React.Fragment>
    )
  }
}

export default JoinButt