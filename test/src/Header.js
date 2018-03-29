import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-start">
          <span className="logo">
            <b><p>rocket</p></b>
            <img src="https://hipo.kz/uploads/company/2c4acd2c0fd4c2637b4008f261b7bb2c4fc7235c.png"
              alt="logo" className="logo-img"/>
            <b><p>firm</p></b>
          </span>
          <div className="menu">
            <p className="menu-item"><a>Блог</a></p>
          </div>
        </div>
        <div className="header-end">
          <a href="#">Ру</a>
          <a href="#">En</a>
          <a href="#">Ққ</a>
        </div>
      </div>
    );
  }
}

export default App;