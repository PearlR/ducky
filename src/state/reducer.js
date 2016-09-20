export const UPDATE_OP = 'UPDATE_OP'
export const UPDATE_X = 'UPDATE_X'
export const UPDATE_Y = 'UPDATE_Y'
export const UPDATE_EQUALS = 'UPDATE_EQUALS'

export const DEFAULT_STATE = { op: '+', x: 0, y: 0, equals: 0 }

export const reducer = (state = DEFAULT_STATE , { type, payload }) => {

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

    case UPDATE_EQUALS:
      return {
        ...state,
        equals: state.x + payload.op + state.y
      }

    default:
      console.log(`Returning the state unchanged ${state}`)
      return state
  }
}
