import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionType from './counter-type'

const initialState = {
    counter:{ 
    value: 0,
    step: 1
    },
    
    user: {},
    todos: {}
}

const reduser = (state = initialState, action) => {
     // action - можно деструктуризировать в начале


    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state, // распылим, чтоб ничего не потерять
                counter: {
                    ...state.counter, // распылим сюда step, и изменим value 
                    value: state.counter.value + action.payload,
                }
            }
        case actionType.DECREMENT:
            return {
                 ...state, // распылим весь предыд. стейт, сохраним то что не относится к каунтеру
                counter: {
                    ...state.counter, // распылим, что б сохранить "шаг"
                    value: state.counter.value - action.payload
                }
            }
        default: return state
    }

};

const store = createStore(reduser, composeWithDevTools());
export default store;


