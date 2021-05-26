import React from 'react'

export default function CalculatorButton(props) {
    
    const onClick = (event) => {
        props.handleClick(event.target.value);
    }
    
    return (
        <button id = {props.id} className= 'numButton' value= {props.text} onClick= {onClick}> {props.text}</button>
    );
}
