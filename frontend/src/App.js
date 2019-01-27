import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import NewsContainer from './containers/NewsContainer'

class App extends Component {

    render() {
    return (

            <div className="App">
            <HeaderContainer/>
            <NewsContainer/>
            <footer className="blockquote-footer">
                Aregos from <cite title="Source Title">Aregos Inc.</cite>
            </footer>
        </div>

    );
  }
}

export default App;