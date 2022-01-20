import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import industries from './components/industries/industries.component';
import collectionItem from './components/services-collections/service-collection.component';
//Quick 


function App (){
      return(
        <div>
          <Switch>
            <Route exact path = '/' component = {Header} />
            <Route exact path = '/industries' component = {industries} />
            <Route path= "/jewel" component = {collectionItem}/>
          </Switch>
        </div>
      )
}

export default App;
