export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'

export const DEFAULT_STATE = { open: undefined }

const toggleOpen = (current, next) => {
  return current === next ? undefined : next
}

export const reducer = (state = DEFAULT_STATE , { type, payload }) => {
  switch (type) {
    case TOGGLE_DETAILS:
      return {
        ...state,
        open: toggleOpen(state.open, payload.box)
      }

    default:
      return state
  }
}
