import React, { Component } from "react";
import { Route, Switch } from 'react-router';
import Home from "./pages/home";
import Internship from './pages/Internship';
import Exchange from './pages/Exchange';
import Scholarships from './pages/Scholarship';
import Opertunity from './pages/Oppertunity';
import Addpost from './pages/addpost';
import NavBar from "./pages/navBar";


class App extends Component {
  render() {
    return <div>
      <NavBar />
      <Addpost /> 


      {/* <div className="content">

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Internship"  component={Internship} />
        <Route path="/Exchange" component={Exchange} />
        <Route path="/Scholarships" component={Scholarships} />
        <Route path="/Opertunity" component={Opertunity} />
        <Route path="/" component={Home} />
      </Switch>
      </div> */}
    </div>
  }
}

export default App;
