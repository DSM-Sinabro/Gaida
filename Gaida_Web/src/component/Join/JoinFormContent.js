import React from 'react';
import styles from './Join.scss';

class JoinFormContent extends React.Component {
    render() {
        return (
            <div>
              <div className = { styles.inputLongbox}>
                 <div className = {styles.funcDesc}>사용하는 이메일을 입력해 주세요</div>
                 <div className = {styles.inputCover}><input /></div> 
              </div>  

              <div className = { styles.inputLongbox}>
                 <div className = {styles.funcDesc}>아이디를 입력해 주세요</div>
                  <div className = {styles.inputCover}><input /></div> 
              </div>  

              <div className = { styles.inputLongbox}>
                 <div className = {styles.funcDesc}>비밀번호를 입력해 주세요</div>
                  <div className = {styles.inputCover}><input /></div> 
              </div>  

              <div className = { styles.inputLongbox}>
                 <div className = {styles.funcDesc}>나이대를 입력해 주세요</div>
                 <div className = {styles.half}>
                    <div className = {styles.halfCover}><input /></div> 
                    <div className = {styles.halfCover}><input /></div>
                 </div>
              </div>  
            </div>
        )
    }
}

export default JoinFormContent;