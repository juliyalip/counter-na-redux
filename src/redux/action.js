import actionType from './counter-type'

export const increment = value => ({
    type: actionType.INCREMENT,
    payload: value
});


export const decrement = value => ({
    type: actionType.DECREMENT,
    payload: value
})