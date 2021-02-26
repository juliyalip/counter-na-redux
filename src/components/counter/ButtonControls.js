import React from 'react';

const ButtonControls = ({ onIncrement, onDecrement, step }) =>( 
    <div>
        <button type="button" onClick={onIncrement}>Добавить {step}</button>
        <button type="button" onClick={onDecrement}>Отнять {step}</button>
    </div>)
;

export default ButtonControls;