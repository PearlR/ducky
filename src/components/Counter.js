import React from 'react' 

import { connect } from 'react-redux' 

import { INCREMENT, DECREMENT } from '../state/reducer'

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  console.log(`Rendering Counter with count == to ${count}`)

return <div>
  <h1>{count}</h1>
  <button onClick={handleIncrement}>+</button>
  <button onClick={handleDecrement}>-</button>
</div>

}

const mapStateToProps = state => {
  console.log('Calling mapStateToProps')
  console.log(`Setting the count prop from the state, where state == ${state}`)

  return { count: state }
}

const mapDispatchToProps = dispatch => {
  console.log('Calling mapDispatchToProps')
  console.log('Setting the handleIncrement and handleDecrement as props')

  return {  
    handleIncrement: () => {
      console.log('[+] button clicked')
      console.log('Calling dispatch and passing { type: INCREMENT } to it')
      dispatch({ type: INCREMENT })
    },
    handleDecrement: () => {
      console.log('[-] button clicked')
      console.log('Calling dispatch and passing { type: DECREMENT } to it')
      dispatch({ type: DECREMENT })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter) 
