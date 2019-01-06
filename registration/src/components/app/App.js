import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import Registration from '../registration/registration';
import Login from '../login/login';

import Header from '../header/header';

class App extends Component {
  render() {
    return (
      
        <div>
             <Header />
             <Route path="/registration" component={Registration} />
             <Route path="/login" component={Login} />
            {/* <Route component={PageNotFond} />  */}
        </div>
    );
  }
}
export default withRouter(App);