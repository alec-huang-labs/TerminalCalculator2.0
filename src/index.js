import React from 'react';
import ReactDOM from 'react-dom';
import BtnsAndInput from './App.js';
import Instructions from './instructions.js'


class Interface extends React.Component {
  render(){
    return (
      <div className = 'body'>
        <Instructions />
        <BtnsAndInput />
      </div>
    )
  }
}

ReactDOM.render(
    <Interface />,
  document.getElementById('root')
);

