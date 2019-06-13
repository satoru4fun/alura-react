import React from 'react';
import ReactDOM from 'react-dom';
import './css/pure-min.css';
import './css/side-menu.css';
import App from './App';
import AutorBox from './Autor';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (<BrowserRouter>  
        <Switch>
            <Route exact path="/" component={App}>
                <div>

                <Route path="/autor" component={AutorBox}/>
                <Route path="/livro"/>
                </div>
            </Route>
        </Switch>
    </BrowserRouter>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
