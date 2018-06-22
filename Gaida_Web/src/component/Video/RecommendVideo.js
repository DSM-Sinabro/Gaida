import React from 'react';
import styles from './styles.scss';

class RecommendVideo extends React.Component {
  render() {
    return(
      <div className = {styles.recommendVideoCover}>
        <div className = {styles.mainVideo}></div>
        <div className = {styles.addInfo}></div>
        <div className = {styles.secondVideo}></div>
        <div className = {styles.thirdVideo}></div>
      </div>
    )
  }
}

export default RecommendVideo;