import React from 'react';
import styles from './styles.scss';

class RecommendVideo extends React.Component {
  render() {
    return(
      <div className = {styles.recVideo}>
        <video />
      </div>
    )
  }
}

export default RecommendVideo;