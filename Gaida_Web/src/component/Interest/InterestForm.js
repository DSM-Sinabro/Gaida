import React from 'react';
import styles from './interest.scss';
import Card from './Card';
import Next from './Next';

class InterestForm extends React.Component {
  render() {
    return(
      <div className = {styles.interForm}>
        <div className = {styles.interForm_text}>관심사 설정</div>
        <div className = {styles.interForm_cardCover}>
          <Card />
        </div>
        <Next />
      </div>
    )
  }
}

export default InterestForm;