export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'

export const DEFAULT_STATE = { open: {} }

const toggleOpen = (current, next) => {
  return current === next ? undefined : next
}

export const reducer = (state = DEFAULT_STATE, { type, payload = {} }) => {
  const { row, box } = payload
  
  switch (type) {
    case TOGGLE_DETAILS:
      return {
        ...state,
        open: {
          ...state.open,
          [row]: toggleOpen(state.open[row], box)
        }
      }

    default:
      return state
  }
}
