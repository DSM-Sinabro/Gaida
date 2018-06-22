import React from 'react';
import styles from './styles.scss';

const PopularVideo = (props) => {
  return (
    <div className = {styles.popularvideoCover}>
        <div className = {styles.rank}>{props.rank}</div>
        <img className = {styles.thumbnail} src = {props.thumbnail} width="230" height="300"/>
        <div className = {styles.videoInfo}>
          <div className = {styles.videoTitle}>{props.title}</div>
          <div className = {styles.artist}>{props.artist}</div>
        </div>
    </div>
  )
}


export default PopularVideo