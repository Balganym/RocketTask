import React, { Component } from 'react';
 
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-item">&#169; 2011—2018 Ракетная фирма</p>
        <p className="footer-item">Агентство в <a className="footer-link">инстаграмме</a> и <a className="footer-link">фейсбуке</a></p>
        <p className="footer-item"><a className="footer-link">Канал</a> в телеграме</p>
        <p className="footer-item"><a className="footer-link">О названии</a>, <a className="footer-link">команда сайта</a></p>
        <p className="footer-item">Работы по <a className="footer-link">RSS</a></p>
      </footer>
    );
  }
}

export default Footer;
