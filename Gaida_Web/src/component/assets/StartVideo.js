import React from 'react';
import styles from './assets.scss';
import video from '../../../assets/main.mp4';

class StartVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoStatus: 1,
            showController: 0
        }
        this.videoControl = this.videoControl.bind(this);
        this.showControl = this.showControl.bind(this);
        this.hideControl = this.hideControl.bind(this);
    }
    render() {
        console.log(this.state.showController)
        return(
            <div className = {styles.start_video} onMouseOver = {(e) => this.showControl(e)} onMouseOut = {(e) => this.hideControl(e)}>
                <video autoPlay id = "video" autoPlay>
                    <source src = { video } type = "video/mp4"/>
                </video>
                
                <div className = {styles.controller}>
                    <div className = {styles.pause} onClick = {() => this.videoControl('pause')} style = {{'display': this.state.videoStatus ? 'flex' : 'none'}}></div>
                    <div className = {styles.play} onClick = {() => this.videoControl('play')} style = {{'display' : this.state.videoStatus ? 'none' : 'flex'}}></div>
                </div>
            </div>
        )
    }

    showControl(e) {
        if(e.type == 'mouseover') {
            this.setState({
                showController : 1
            })
        }
    }

    hideControl(e) {
        if(e.type == 'mouseout') {
            this.setState({
                showController : 0
            })
        }
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