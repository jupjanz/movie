export const INCREMENT = 'INCREMENT'
export const DECREMENT ='DECREMENT'


export const onIncrement = (point) => {
  return {
    type: INCREMENT,
    payload: point + 1
  }
}

export const onDecrement = (point) => {
    return {
        type: DECREMENT,
        payload: point - 1
    }
}
