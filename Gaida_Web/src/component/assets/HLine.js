import React from 'react';
import styles from './assets.scss';

const HLine = (props) => {
  return(
    <hr className = {styles.hline} style = {{ width : props.width }}/>
  )
}
export default HLine;