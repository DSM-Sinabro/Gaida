import React from 'react';
import Header from '../component/Header/Header';
import SideMenu from '../component/SideMenu/SideMenu';
import HomeContent from '../component/HomeContent/HomeContent';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <Header />
        <SideMenu />
        <HomeContent />
      </div>
    )
  }
}

export default Main;