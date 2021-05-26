import React from 'react'
import CalculatorButton from './CalculatorButton';
import CalculatorResult from './CalculatorResult';
import LogicButton from './LogicButton';

export default function CalculatorSection(props) {

    let deleteAll = (props.value === '0' || props.value.length === 0)? 'AC' : 'C';

    return(
        <div className= 'container'>
            <CalculatorResult currentValue= {props.value}/>
            <div className= 'buttonDiv'>
                <LogicButton text= {deleteAll} handleLogicClick= {props.handleLogicClick}/>
                <LogicButton text= '+/-' handleLogicClick= {props.handleLogicClick}/>
                <LogicButton text= '%' handleLogicClick= {props.handleLogicClick}/>
                <LogicButton text= '÷' handleLogicClick= {props.handleLogicClick}/>

                <CalculatorButton text= '7' handleClick= {props.onClick}/>
                <CalculatorButton text= '8' handleClick= {props.onClick}/>
                <CalculatorButton text= '9' handleClick= {props.onClick}/>
                <LogicButton text= 'x' handleLogicClick= {props.handleLogicClick}/>

                <CalculatorButton text= '4' handleClick= {props.onClick}/>
                <CalculatorButton text= '5' handleClick= {props.onClick}/>
                <CalculatorButton text= '6' handleClick= {props.onClick}/>
                <LogicButton text= '-' handleLogicClick= {props.handleLogicClick}/>

                <CalculatorButton text= '1' handleClick= {props.onClick}/>
                <CalculatorButton text= '2' handleClick= {props.onClick}/>
                <CalculatorButton text= '3' handleClick= {props.onClick}/>
                <LogicButton text= '+' handleLogicClick= {props.handleLogicClick}/>

                <CalculatorButton text= '0' id= 'zero' handleClick= {props.onClick}/>
                <CalculatorButton text= '.' handleClick= {props.onClick}/>
                <LogicButton text= '=' handleLogicClick= {props.handleLogicClick}/>
            </div>
        </div>
    );
}
