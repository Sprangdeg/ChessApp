import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { observe } from './Game';

var rootEl = document.getElementById('root');

  observe(knightPosition =>
    ReactDOM.render(
      <App knightPosition={knightPosition} />,
      rootEl
    )
  );
// ReactDOM.render(<App />, document.getElementById('root')); 
