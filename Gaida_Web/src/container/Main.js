import React from 'react';
import Header from '../component/Header/Header';
import SideMenu from '../component/SideMenu/SideMenu';
import HomeContent from '../component/HomeContent/HomeContent';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      popular : [
        { 'rank' : 1 ,'title' : this.sliceVideoTitle("오늘또 뜨뜨는 영화를 봅니다."), 'artist' : '뜨뜨뜨뜨'},
        { 'rank' : 2 ,'title' : this.sliceVideoTitle("새콤달콤 오독오독 패스츄리"), 'artist' : '떵개떵'},
        { 'rank' : 3 ,'title' : this.sliceVideoTitle("오마이걸 바나나 알러지 원숭이"), 'artist' : 'UNICORN TV'},
        { 'rank' : 4 ,'title' : this.sliceVideoTitle("솔라감성 part.6 눈물이 어쩌구"), 'artist' : 'MAMAMOO'},
      ]
    }
  }
  render() {
    return(
      <div>
        <Header />
        <SideMenu />
        <HomeContent popularGaida = {this.state.popular}/>
      </div>
    )
  }
  sliceVideoTitle(title) {
    var titleLen = title.length;
    if(titleLen >= 12) {
      title = title.substr(0, 13) + "...";
      return title;
    }
  }
}

export default Main;