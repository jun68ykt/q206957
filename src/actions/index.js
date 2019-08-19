export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const onIncrement = name => {
  return {
    type: INCREMENT,
    name
  }
}

export const onDecrement = name => {
  return {
    type: DECREMENT,
    name
  }
}
