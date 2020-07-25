import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/App.css';
import HomePage from "./pages/home_page";
import FacebookPixelInjection from "./pages/npm/FacebookPixelInjection";

class App extends Component{
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/welcome" exact component={HomePage}/>
                    <Route path="/tools/facebook-pixel-injection" exact component={FacebookPixelInjection}/>
                    <Route path="/" render={() => (<Redirect to="/welcome" />)} />
                    <Route path="*" render={() => (<Redirect to="/welcome" />)} />
                </Switch>
            </div>
        )
    }
}

export default App;
