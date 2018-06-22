import React from 'react';
import styles from './styles.scss';
import HLine from '../assets/HLine';

class List extends React.Component {
  render() {
    return(
      <React.Fragment>
        <li><div>홈</div></li>
        <li><div>인기</div></li>
        <HLine />
        <li><div>가이다</div></li>
        <li><div>팁</div></li>
      </React.Fragment>
    )
  }
}

export default List