import React from 'react';
import styles from './StartVideo.scss';

class StartVideo extends React.Component {
    render() {
        return(
            <div className = {styles.start_video}>
                <video>
                </video>
            </div>
        )
    }
}

export default StartVideo;