export const UPDATE_OP = 'UPDATE_OP'
export const UPDATE_X = 'UPDATE_X'
export const UPDATE_Y = 'UPDATE_Y'
export const CALCULATE_TOTAL = 'CALCULATE_TOTAL'

export const DEFAULT_STATE = { op: '+', x: 0, y: 0, equals: 0 }

export const reducer = (state = DEFAULT_STATE , { type, payload }) => {

  const calculateTotal = (firstNum, secondNum, operator) => {
    switch (operator) {
      case '/':
        return firstNum / secondNum

      case '-':
        return firstNum - secondNum

      case '*':
        return firstNum * secondNum

      default:
        return firstNum + secondNum
    }
  }

  switch (type) {
    case UPDATE_OP:
      return {
        ...state,
        op: payload.op
      }

    case UPDATE_X:
      return {
        ...state,
        x: payload.x
      }

    case UPDATE_Y:
      return {
        ...state,
        y: payload.y
      }

    case CALCULATE_TOTAL:
      return {
        ...state,
        equals: calculateTotal(state.x, state.y, state.op)
      }

    default:
      console.log(`Returning the state unchanged ${state}`)
      return state
  }
}
