import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Header from './Header.js'
import Posts from './Posts.js'
import Loader from './Loader.js'
import Footer from './Footer.js'
import 'jquery'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
