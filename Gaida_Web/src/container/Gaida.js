import React from 'react';
import Header from '../component/Header/Header';
import SideMenu from '../component/SideMenu/SideMenu'
import Content from '../component/Content/Content';
import GaidaContent from '../component/GaidaTab/Gaida';
import { sliceVideoTitle } from '../module/module';


class Gaida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular : [
        { rank : 1 , title : sliceVideoTitle("[연애직캠] 카페에서 갑질 진상 부렸을 때 여친 반응은?"), artist : '스튜디오 룰루랄라', thumbnail : require('../../assets/testimage1.png')},
        { rank : 2 , title : sliceVideoTitle("리얼사운드 | 슬라임에 푹 빠진 모찌피치"), artist : 'Mochipeach', thumbnail : require('../../assets/testimage2.png')},
        { rank : 3 , title : sliceVideoTitle("뱀파이어로 진화한 인류"), artist : '상궁', thumbnail : require('../../assets/testimage3.png')},
        { rank : 4 , title : sliceVideoTitle("러시아 월드컵 '웃음후보' 이란?"), artist : 'MAMAMOO' , thumbnail : require('../../assets/testimage4.png')},
        { rank : 5 , title : sliceVideoTitle("러시아 월드컵 '웃음후보' 이란?"), artist : 'MAMAMOO' , thumbnail : require('../../assets/testimage4.png')},
        { rank : 6 , title : sliceVideoTitle("러시아 월드컵 '웃음후보' 이란?"), artist : 'MAMAMOO' , thumbnail : require('../../assets/testimage4.png')},
        { rank : 6 , title : sliceVideoTitle("러시아 월드컵 '웃음후보' 이란?"), artist : 'MAMAMOO' , thumbnail : require('../../assets/testimage4.png')},
        { rank : 6 , title : sliceVideoTitle("러시아 월드컵 '웃음후보' 이란?"), artist : 'MAMAMOO' , thumbnail : require('../../assets/testimage4.png')},
        { rank : 6 , title : sliceVideoTitle("러시아 월드컵 '웃음후보' 이란?"), artist : 'MAMAMOO' , thumbnail : require('../../assets/testimage4.png')},
      ]
    }
  }
  render() {
    return(
      <div>
        <Header />
        <SideMenu />
        <Content children = { <GaidaContent  popularGaida = {this.state.popular}/> } />
      </div>
    )
  }
}

export default Gaida;