import React from 'react';
import './App.css'
import SideMenu from './component/sideMenu.componet';
//Quick 

class App extends React.Component{
      
  render(){
    return(
      <div className='App'>
         <SideMenu />
         {/*This sideMenu inherite all attribute like css class*/}
      </div>
    )
  }

}

export default App;
