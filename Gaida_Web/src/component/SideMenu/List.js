import React from 'react';
import styles from './styles.scss';
import HLine from '../assets/HLine';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    return(
      <React.Fragment>
        <li><Link to = "/" className = {styles.item}>홈</Link></li>
        <li><Link to = "/" className = {styles.item}>인기</Link></li>
        <HLine />
        <li><Link to = "/gaida" className = {styles.item}><div>가이다</div></Link></li>
        <li><Link to = "/tip" className = {styles.item}>팁</Link></li>
      </React.Fragment>
    )
  }
}

export default List