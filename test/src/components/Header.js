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
            <p className="menu-item"><a data-toggle="modal" data-target="#myModal">
            О названии</a></p>
          </div>
        </div>
        <div className="header-end">
          <a>Ру</a>
          <a>En</a>
          <a>Ққ</a>
        </div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">О названии</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div className="modal-body">
                <p>«Но амбиции были и у нас. Да, сэр, были. Оттянуть призыв в армию и окончить колледж. Жениться, заделать ей ребенка, и пусть твоя и ее семьи помогают вам, пока ты будешь укреплять свое положение студента, пользующегося отсрочкой. Получить работенку, считающуюся у призывных комиссий престижной, например, в какой-нибудь ракетной фирме.»</p>
                <p>Роберт Хайнлайн, «Дорога славы».</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;