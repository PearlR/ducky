export const MATHSIGN = 'MATHSIGN'
export const UPDATE = 'UPDATE'
export const FIRSTNUM = 'FIRSTNUM'
export const SECONDNUM = 'SECONDNUM'
export const RESULT = 'RESULT'

export const DEFAULT_STATE = {
  firstNum: 1,
  secondNum: 1

}

// The reducer is just a pure function that takes the current state and
// an action. It uses the action to create a new state and returns that.
// It's very simple!
export const reducer = (state = DEFAULT_STATE, action) => {

  // The reducer is just a switch statement based on the action.type.
  // It is essentially like a central dispatcher, routing actions to
  // the appropriate state changes.
  switch (action.type) {

    case MATHSIGN:         // When the action.type === 'INCREMENT'
      return {
        ...state,
        mathsign: state.payload

      }

    case FIRSTNUM:
      return {
        ...state,
        firstNum: state.payload
      }

    case SECONDNUM:
      return {
        ...state,
        secondNum: state.payload
      }

    case UPDATE:
      return {
        ...state,
        firstNum: parseInt(action.payload, 10),
        secondNum: parseInt(action.payload, 10)
      }

    default:                // If the action.type is unrecognized
      return state          // then we ALWAYS return the state unchanged
  }
}
