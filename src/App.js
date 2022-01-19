import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import industries from './components/industries/industries.component';
import navigation from './components/navigation/navigation.component';
//Quick 


function App (){
      return(
        <div>
          <Switch>
            <Route exact path = '/' component = {Header} />
            <Route exact path= '/industries' component = {industries}/>
          </Switch>
        </div>
      )
}

export default App;
