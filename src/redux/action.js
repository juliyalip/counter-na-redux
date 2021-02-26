export const increment = value => ({
    type: 'counter/Increment',
    payload: value
});


export const decrement = value => ({
    type: 'counter/Decrement',
    payload: value
})