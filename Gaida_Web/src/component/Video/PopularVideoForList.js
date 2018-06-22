import React from 'react';
import styles from './CardStyles.scss';

const PopularVideoForList = (props) => {
  return(
    <div className = {styles.popularvideoCover}>
      <img className = {styles.thumbnail} src = {props.thumbnail} />
      <div className = {styles.videoInfo}>
        <div className = {styles.videoTitle}>{props.rank}.{props.title}</div>
        <div className = {styles.artist}>{props.artist}</div>
      </div>
    </div>
  )
}

export default PopularVideoForList;