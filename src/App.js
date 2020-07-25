import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/App.css';
import HomePage from "./pages/home_page";
import FacebookPixelInjection from "./pages/npm/facebook/FacebookPixelInjection";
import GoogleCMFloodlightTagInjection024 from "./pages/npm/google/0.2.4/GoogleCMFloodlightTagInjection024";

class App extends Component{
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/welcome" exact component={HomePage}/>
                    <Route path="/tools/facebook-pixel-injection/0.1.0" exact component={FacebookPixelInjection}/>
                    <Route path="/tools/google-cm-pixel-injection/0.2.5" exact component={GoogleCMFloodlightTagInjection024}/>
                    <Route path="/tools/google-cm-pixel-injection/0.2.4" render={() => (<Redirect to="/tools/google-cm-pixel-injection/0.2.5" />)} />
                    <Route path="/" render={() => (<Redirect to="/welcome" />)} />
                    <Route path="*" render={() => (<Redirect to="/welcome" />)} />
                </Switch>
            </div>
        )
    }
}

export default App;
