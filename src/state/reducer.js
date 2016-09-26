export const TOGGLE_DETAILS_TOP = 'TOGGLE_DETAILS_TOP'
export const TOGGLE_DETAILS_BOTTOM = 'TOGGLE_DETAILS_BOTTOM'

export const DEFAULT_STATE = { open: undefined }

const toggleOpen = (current, next) => {
  console.log('current ', current, 'next ', next)
  return current === next ? undefined : next
}

const idTop = id => {
  if (id <= 3 ) return id
}

const idBottom = id => {
  if (id >= 4 ) return id
}

export const reducer = (state = DEFAULT_STATE, { type, payload }) => { 
  switch (type) {
    case TOGGLE_DETAILS_TOP:
      return {
        ...state,
        open: toggleOpen(state.open, idTop(payload.box))
      }

      case TOGGLE_DETAILS_BOTTOM:
      return {
        ...state,
        open: toggleOpen(state.open, idBottom(payload.box))
      }

    default:
      return state
  }
}
