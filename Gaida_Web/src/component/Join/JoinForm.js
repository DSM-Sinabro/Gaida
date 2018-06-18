import React from 'react';
import styles from './Join.scss';
import JoinFormContent from './JoinFormContent';
import JoinButt from './JoinButt';
import JoinButtSub from './JoinButtSub';

class JoinForm extends React.Component {
    render() {
        return(
            <div className = { styles.joinForm }>
                <div className = {styles.joinForm_text}>회원가입</div>
                <JoinFormContent />
                <JoinButt />
            </div>
        )
    }
}

export default JoinForm