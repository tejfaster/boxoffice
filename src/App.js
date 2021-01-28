import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Starred from './pages/Starred'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Nav/>
   <Switch>
     <Route exact path="/">
    <Home/>
     </Route>
     <Route exact path="/starred">
      <Starred/>
     </Route>
     {/* <Route>
       404: not found
     </Route> */}
   </Switch>
   </div>
  );
}

export default App;
