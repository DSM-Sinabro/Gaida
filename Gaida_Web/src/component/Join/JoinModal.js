import React from 'react';
import styles from './Join.scss';
import StartVideo from '../assets/StartVideo';
import JoinForm from './JoinForm';

class JoinModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = { styles.joinModal }>
                <div className = { styles.whitemodal}>
                    <StartVideo />
                    <JoinForm />
                </div>
            </div>
        )
    }
}

export default JoinModal;