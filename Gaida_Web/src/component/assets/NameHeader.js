import React from 'react';
import styles from './assets.scss';

class NameHeader extends React.Component {
  render() {
    return(
      <div className = {styles.subjectTitle}>{this.props.subjectTitle}</div>
    )
  }
}

export default NameHeader;