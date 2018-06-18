import React from 'react';
import Header from '../component/Header/Header';
import SideMenu from '../component/SideMenu/SideMenu';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <Header />
        <SideMenu />
      </div>
    )
  }
}

export default Main;