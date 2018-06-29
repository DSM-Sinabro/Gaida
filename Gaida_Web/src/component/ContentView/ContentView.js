import React from 'react';
import styles from './styles.scss';

class ContentView extends React.Component {
  render() {
    return(
      <div className = {styles.content_box}>
        <div className = {styles.content_video}>
          <video />
        </div>
        <div className = {styles.content_details}>
          <div className = {styles.content_details_info}>
            <div className = {styles.content_title}></div>
            <div className = {styles.content_views}></div>
            <div className = {styles.content_like}></div>
            <div className = {styles.content_artist}></div>
          </div>
          <div className = {styles.content_description}>

          </div>
        </div>
      </div>
    )
  }
}

export default ContentView;