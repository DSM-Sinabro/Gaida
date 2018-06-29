import React from 'react';
import styles from './styles.scss';
import HLine from '../assets/HLine';

class ContentView extends React.Component {
  render() {
    return(
      <div className = {styles.content_box}>
        <div className = {styles.content_video}>
          <video />
        </div>
        <div className = {styles.content_details}>
          <div className = {styles.content_details_info}>
            <div className = {styles.content_title}>오늘도 뜨뜨는 영화를 찍습니다.</div>
            <div className = {styles.content_views}>조회수 5,000,000</div>
            <div className = {styles.content_subinfo}>
              <div className = {styles.content_like}>따봉 3,000</div>
              <div className = {styles.content_artist}>유튜브 가이다 | 뜨뜨뜨뜨</div>
            </div>
          </div>
          <HLine width = "100%" />
          <div className = {styles.content_description}>
            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위의 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.            
          </div>
        </div>
      </div>
    )
  }
}

export default ContentView;