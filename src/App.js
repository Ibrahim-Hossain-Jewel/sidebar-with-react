import React from 'react';
import Header from './components/header/header.component';
import './App.css';

class App extends React.Component{
    render(){
      return(
        <div>
        <h1>Hello world</h1>
          <Header />
        </div>
      )
    }
}

export default App;
