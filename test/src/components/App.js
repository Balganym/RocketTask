import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Header from './Header.js'
import Posts from './Posts.js'
import Footer from './Footer.js'
 
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          <Posts />
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
