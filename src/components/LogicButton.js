import React from 'react'

export default function LogicButton(props) {
    const handleClick = ({target}) => {
        props.handleLogicClick(target.value);
    }
    return (
        <button  className= 'logicButton' value= {props.text} onClick = {handleClick}>{props.text}</button>
    );
}
