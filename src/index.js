import React from 'react';
import ReactDOM from 'react-dom';
import BtnsAndInput from './btnsAndInput.js';
import Instructions from './instructions'

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
    document.getElementById('root') || document.createElement('div'),
);

export default Interface;