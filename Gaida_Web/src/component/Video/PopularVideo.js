import React from 'react';
import styles from './styles.scss';

class PopularVideo extends React.Component {
  render() {
    return(
      <div className = {styles.popularvideoCover}>
        <div className = {styles.rank}>{this.props.rank}</div>
        <img className = {styles.thumbnail} src = {this.props.thumbnail} width="230" height="300"/>
        <div className = {styles.videoInfo}>
          <div className = {styles.videoTitle}>{this.props.title}</div>
          <div className = {styles.artist}>{this.props.artist}</div>
        </div>
      </div>
    )
  }
}

export default PopularVideo