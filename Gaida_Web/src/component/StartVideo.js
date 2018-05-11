import React from 'react';
import styles from './StartVideo.scss';
import video from '../../assets/main.mp4';

class StartVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoStatus: 1
        }
        this.videoControl = this.videoControl.bind(this);
    }
    render() {
        return(
            <div className = {styles.start_video}>
                <video autoPlay id = "video">
                    <source src = { video } type = "video/mp4"/>
                </video>
                <div className = {styles.pause} onClick = {() => this.videoControl('pause')} style = {{'display': this.state.videoStatus ? 'flex' : 'none'}}>pause</div>
                <div className = {styles.play} onClick = {() => this.videoControl('play')} style = {{'display' : this.state.videoStatus ? 'none' : 'flex'}}>play</div>
            </div>
        )
    }

    videoControl(type) {
        const video = document.getElementById('video');
        if(type == 'pause') {
            video.pause();
            this.setState({
                videoStatus : 0
            })
        }
        else if(type == 'play') {
            video.play();
            this.setState({
                videoStatus : 1
            })
        }
    }
}

export default StartVideo;