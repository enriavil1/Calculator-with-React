import './App.css';
import React, {useState, useEffect} from 'react';
import CalculatorSection from './components/CalculatorSection.js';

function App() {
  const [number, setNumber] = useState('');
  const [currentAmount, setCurrentAmount] = useState(0);
  const [operator, setOperator] = useState('');


  const handleClick = (value) => {
    if((number.length === 0 || number === '0')){
      setNumber(value);
    }
    else{
      if(value === '.' && number.indexOf(value) === -1){
        setNumber((prevValue) => prevValue + value);
        console.log(number.indexOf(value));
      }
      if(value !== '.'){
        setNumber((prevValue) => prevValue + value);
      }
    }
  }

  const handleResult = (operation) => {
    switch(operation){
      case '÷':
        setNumber((prevNumber) => currentAmount / parseFloat(prevNumber));
        break;
      
      case 'x':
        setNumber((prevNumber) => currentAmount * parseFloat(prevNumber));
        break;
    
      case '-':
        setNumber((prevNumber) => currentAmount - parseFloat(prevNumber));
        break;
      
      case "+":
        setNumber((prevNumber) => currentAmount + parseFloat(prevNumber));
        break;
    }
    setCurrentAmount(parseFloat(number));
  }

  const handleLogicClick = (value) => {
    switch(value){
      case 'C':
        setNumber('0');
        break;

      case 'AC':
        setCurrentAmount(0);
        setOperator('');
        break;
      
      case '+/-':
        if(number !== '0' && number.length > 0){
          const sign = number.slice(0,1) !== '-' ? "-" : '';

          if(sign === '-'){
            setNumber((prevValue) => sign+ prevValue);
          }
          else{
            setNumber((prevValue) => prevValue.slice(1, prevValue.length));
          }
        }
        break;
      
      case '%':
        setNumber((prevValue) => (parseFloat(prevValue)/100).toString());
        break;

      case '÷':

        if(number.length === 0){
          setCurrentAmount(0);

        }else if(operator === '÷'){
          setCurrentAmount((prevCurrentAmount) => prevCurrentAmount / parseFloat(number));
          setNumber('0')
          console.log(currentAmount);

        }else{
          setCurrentAmount(parseFloat(number));
          setNumber('0');
          setOperator('÷');
        }
        break;

      case 'x':
        if(number.length === 0){
          setCurrentAmount(0);
        }else if(operator === 'x'){
          setCurrentAmount((prevCurrentAmount) => prevCurrentAmount * parseFloat(number));
          setNumber('0');
        }else{
          setCurrentAmount(parseFloat(number));
          setNumber('0');
          setOperator('x');
        }
        break;
        
      case '-':
        if(number.length === 0){
          setCurrentAmount(0);
        }else if(operator === '-'){
          setCurrentAmount((prevCurrentAmount) => prevCurrentAmount - parseFloat(number));
          setNumber('0');
        }else{
          setCurrentAmount(parseFloat(number));
          setNumber('0');
          setOperator('-');
        }
        break;

      case '+':
        if(number.length === 0){
          setCurrentAmount(0);
        }else if(operator === '+'){
          setCurrentAmount((prevCurrentAmount) => prevCurrentAmount + parseFloat(number));
          setNumber('0');
        }else{
          setCurrentAmount(parseFloat(number));
          setNumber('0');
          setOperator('+');
        }
        break;

      case '=':
        handleResult(operator);
        setOperator('');
        break;
        
    }
  }



  return(
    <CalculatorSection handleLogicClick= {handleLogicClick} value= {number} onClick= {handleClick}/>
  );

}

export default App;
