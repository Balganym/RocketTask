import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Header from './Header.js'
import Feeds from './Feeds.js'
import Posts from './Posts.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <Posts />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
