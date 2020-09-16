import React from 'react';
import './App.css';
import {shortDate, btnRow} from './utility.js'
import Logo from './logo.js'

const math = require("mathjs");

function Memory(props){
  let memoryArray =  props.value.map(x => <p>{x}</p>);
  return (
    <div> 
      <Logo /><br />
      {memoryArray.slice(0,9)}
    </div>
  )
}

class BtnsAndInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      savedInput: []
    }
    this.handleButton = this.handleButton.bind(this);
    this.solve = this.solve.bind(this);
  }
  handleInput(event){
    this.setState({
      userInput: event.target.value
    });
  }
  solve(event){
    let prevOutput = this.state.savedInput; //array of previous inputs
    if(event.key === 'Enter' || event.target.id === "="){
      event.preventDefault();
      if(this.state.userInput === "Clear" || this.state.userInput === "clear" ){
        this.setState({
          userInput: "",
          savedInput: []
        })
      }else{
        try{
          var solution = math.evaluate(this.state.userInput)
          prevOutput.unshift(shortDate().concat(" " + this.state.userInput + " = " + solution));
          this.setState({
            userInput: "",
            savedInput: prevOutput
          })
        }
        catch(error){
          prevOutput.unshift(shortDate().concat(" " + this.state.userInput + " = " + error));
          this.setState({
            userInput: "",
            savedInput: prevOutput
          })
        }
      }
    }
  }
  handleButton(event){
    const prevInput = this.state.userInput
    const id = event.target.id
    this.setState({
      userInput: prevInput.concat(id)
    })
  }
  clear(){
    this.setState({
        userInput: " ",
        savedInput: []
      })
  }
  delete() {
    this.setState({
      userInput: this.state.userInput.slice(0,-1)
    })
  }
  render() {
    let btnArr = btnRow.map(btn => <button id={btn} onClick={this.handleButton}>{btn}</button>);
    return (
      <div className = 'container'>
        <div className = 'mid-left-column'>
          <div className = "button-row">{btnArr.slice(0,7)}</div>
          <div className = "button-row">{btnArr.slice(7,14)}</div>
          <div className = "button-row">{btnArr.slice(14,21)}</div>
          <div className = "button-row">{btnArr.slice(21,28)}</div>
          <div className = "button-row"> 
            <button id="c" onClick={this.clear.bind(this)}>c</button>
            <button id="=" onClick={this.solve}>=</button>
            <button id="del" onClick={this.delete.bind(this)}>del</button>
            {btnArr.slice(28,32)}
          </div>
        </div>
        <div className = 'bottom-row'>
          <label>Scientific-Terminal-Calculator: </label>
          <textarea className="userText"
                    style={{rows:1}}
                    onChange={this.handleInput.bind(this)}  
                    value={this.state.userInput}
                    onKeyDown={this.solve}
                    autoFocus/>
        </div>
        <div className="right-column">
          <Memory value={this.state.savedInput} />
        </div>
      </div>
    )
  }
}

export default BtnsAndInput;