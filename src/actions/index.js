export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const onIncrement = () => {
  return {
    type: INCREMENT
  }
}

export const onDecrement = () => {
  return {
    type: DECREMENT
  }
}
