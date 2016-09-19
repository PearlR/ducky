export const INCREMENT = 'INCREMENT' 
export const DECREMENT = 'DECREMENT'

export const DEFAULT_STATE = 0

export const reducer = (state = DEFAULT_STATE, action) => {
  console.log(`Calling the reducer with state == ${state}` + 
    ` and action === ${JSON.stringify(action, null, 2)}`)

  switch (action.type) {

    case INCREMENT:
      console.log(`Incrementing the state from ${state} to ${state + 1}`)         
      return state + 1      

    case DECREMENT:
      console.log(`Decrementing the state from ${state} to ${state - 1}`)          
      return state - 1     

    default:
      console.log(`Returning the state unchanged ${state}`)                 
      return state          
  }
}
