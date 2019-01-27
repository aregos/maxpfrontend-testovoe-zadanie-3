import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from "redux-thunk";
import { Router, Route, Redirect, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import FeedContainer from "./containers/FeedContainer";
import EditContainer from "./containers/EditContainer";
import AddFeed from "./components/AddFeed";


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

const customHistory = createBrowserHistory();


ReactDOM.render(
    <Router history = {customHistory}>
    <Provider store = {store}>
        <Redirect from = '/' to = '/news' />
        <Switch>
        <Route exact path = '/news' component = {App} />
        <Route exact path = '/news/addFeed/' component = {AddFeed} />
        <Route exact path = '/news/:id/' component = {FeedContainer} />
        <Route exact path = '/news/:id/edit' component = {EditContainer} />
        </Switch>
    </Provider>
    </Router>
    ,
    document.getElementById('root')
);


