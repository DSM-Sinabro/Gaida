import React from 'react';
import styles from './styles.scss';

const RecommendVideo = (props) => {
  return(
    <div className = {styles.recommendVideoCover}>
      <div className = {styles.mainVideo}><video src = {props.mainVideo} width = "100%" height = "100%"/> </div>
      <div className = {styles.addInfo}></div>
      <div className = {styles.secondVideo}><video src = {props.secondVideo} /></div>
      <div className = {styles.thirdVideo}><video src = {props.thirdVideo}/></div>
    </div>
  )
}

export default RecommendVideo;