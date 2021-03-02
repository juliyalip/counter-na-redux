import React from 'react';
import './counter.css'

const ButtonControls = ({ onIncrement, onDecrement, step }) =>( 
    <div>
        <button type="button" onClick={onIncrement} className="button">Добавить {step}</button>
        <button type="button" onClick={onDecrement} className="button">Отнять {step}</button>
    </div>)
;

export default ButtonControls;