import React from 'react';
import { connect } from 'react-redux' // берем метод из реакт-редакс

import './counter.css'

import * as actions from '../../redux/action' //забираем все действия (action)

import Value from './Value';
import ButtonControls from './ButtonControls';

const Counter = ({ value, onIncrement, onDecrement, step }) => {

    return (
        <div className="Counter">

            <Value value={ value}/>
            <ButtonControls
                onIncrement={() => onIncrement(step)} // через анонимку можем передать динамическое значение
                onDecrement={() => onDecrement(step)}
                step={step} />
        </div>
    )

};

const mapStateToProps = state => {// написали функцию получили объект state
    return {
        // возвращает объект, его свойства будут пропами компонента
           value: state.counter.value,
        step: state.counter.step
    }
}


const mapDispatchToProps = dispatch => {
    // возвращает объект с пропсами
    return {
        onIncrement: (value) => dispatch(actions.increment(value)), // вызвать функцию и передать знач.
        onDecrement: (value) => dispatch(actions.decrement(value)) // вызвать функцию и передать знач.value для динамичю знач
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)