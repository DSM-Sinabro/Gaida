import React from 'react';
import styles from './styles.scss';

class PopularVideo extends React.Component {
  render() {
    return(
      <div className = {styles.popularvideoCover}>
        <video />
      </div>
    )
  }
}

export default PopularVideo