import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  Navbar from './component/Navbar'
//Quick 


function App (){
      return(
        <div>
          <Switch>
            <Route exact path = '/' component = {Navbar} />
          </Switch>
        </div>
      )
}

export default App;
