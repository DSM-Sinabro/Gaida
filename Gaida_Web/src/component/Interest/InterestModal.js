import React from 'react';
import styles from '../assets/assets.scss';
import StartVideo from '../assets/StartVideo';
import InterForm from './InterestForm';

class InterestModal extends React.Component {
  render(){
    return(
      <div className = {styles.Modal}>
        <div className = {styles.whitemodal}>
          <StartVideo />
          <InterForm />
        </div>
      </div>
    )
  }
}

export default InterestModal;
