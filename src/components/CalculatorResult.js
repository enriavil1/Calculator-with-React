import React from 'react'

export default function CalculatorResult(props) {
    return (
        <form>
            <input value={props.currentValue} type= "text" placeholder={0}>
            </input>
        </form>
    );
}

