import React from 'react';
import Interface from "./index";
import BtnsAndInput from "./btnsAndInput";
import Instructions from './instructions'
import Logo from "./logo"
import { render, fireEvent} from '@testing-library/react'
import { shortDate } from './utility';

it("Should be able to render every component without crashing", () => {
  render(<Interface />); 
  render(<BtnsAndInput />);
  render(<Instructions />); 
  render(<Logo />);  
});

it('Should be able to type expression with btns', () =>{
  const { getByTestId } = render(<BtnsAndInput />);
  fireEvent.click(getByTestId('5'))
  fireEvent.click(getByTestId('^'))
  fireEvent.click(getByTestId('2'))
  expect(getByTestId('userText')).toHaveTextContent('5^2')
  fireEvent.click(getByTestId('='))
  expect(getByTestId(`${shortDate()} 5^2 = 25`)).toHaveTextContent(`${shortDate()} 5^2 = 25`)
})

it('Should allow characters to be deleted with \'del\' button and Backspace key', () => {
  const { getByTestId } = render(<BtnsAndInput />);
  fireEvent.click(getByTestId('1'))
  fireEvent.click(getByTestId('2'))
  fireEvent.click(getByTestId('3'))
  fireEvent.click(getByTestId('del'))
  expect(getByTestId('userText')).toHaveTextContent('12')
  fireEvent.keyDown(getByTestId('userText'), { key: 'Backspace', code: 'Backspace' })
  expect(getByTestId('userText')).toHaveTextContent('1')
})

it('Should display user keyboard input', () => {
  const { getByTestId } = render(<BtnsAndInput />)
  fireEvent.change(getByTestId('userText'), {target: {value: "cos(30)"}});
  expect(getByTestId('userText')).toHaveTextContent('cos(30)')
})

it('User should be able to type in expression and input should clear on Enter. Correct output should be displayed',() => {
  const { getByTestId } = render(<BtnsAndInput />)
  fireEvent.change(getByTestId('userText'), {target: {value: "log10(100)"}});
  expect(getByTestId('userText')).toHaveTextContent('log10(100)')
  fireEvent.keyDown(getByTestId('userText'), { key: 'Enter', code: 'Enter' })
  expect(getByTestId('userText')).toHaveTextContent('')
  expect(getByTestId(`${shortDate()} log10(100) = 2`)).toHaveTextContent(`${shortDate()} log10(100) = 2`)
})

it('The \'c\' button should clear memory', () => {
  const { getByTestId } = render(<BtnsAndInput />)
  fireEvent.change(getByTestId('userText'), {target: {value: "log(e)"}});
  fireEvent.keyDown(getByTestId('userText'), { key: 'Enter', code: 'Enter' });
  expect(getByTestId(`${shortDate()} log(e) = 1`)).toHaveTextContent(`${shortDate()} log(e) = 1`)
  fireEvent.change(getByTestId('userText'), {target: {value: "sin(90 deg)"}});
  fireEvent.keyDown(getByTestId('userText'), { key: 'Enter', code: 'Enter' });
  expect(getByTestId(`${shortDate()} sin(90 deg) = 1`)).toHaveTextContent(`${shortDate()} sin(90 deg) = 1`)
  fireEvent.change(getByTestId('userText'), {target: {value: "5!"}});
  fireEvent.keyDown(getByTestId('userText'), { key: 'Enter', code: 'Enter' });
  expect(getByTestId(`${shortDate()} 5! = 120`)).toHaveTextContent(`${shortDate()} 5! = 120`)
  fireEvent.click(getByTestId('c'))
  expect(getByTestId(`memory`)).toHaveTextContent(``);
})

it('Rules of PEMDAS should be followed', () => {
  const { getByTestId } = render(<BtnsAndInput />)
  fireEvent.change(getByTestId('userText'), {target: {value: "3+(5+2)/5*3-4^2"}});
  fireEvent.keyDown(getByTestId('userText'), { key: 'Enter', code: 'Enter' });
  expect(getByTestId(`${shortDate()} 3+(5+2)/5*3-4^2 = -8.8`)).toHaveTextContent(`${shortDate()} 3+(5+2)/5*3-4^2 = -8.8`)
})


