import React from 'react' // Every file with JSX must import React

import { connect } from 'react-redux' // This helps us connect to the store

// action types
import { FIRSTNUM, SECONDNUM, MATHSIGN, RESULT, UPDATE } from '../state/reducer'

// Another pure function. Here we destructure the props right in the
// parameters, pulling out the three props we need. The count is just
// the state from the store, which we got via the mapStateToProps function
// from our "connect" wrapper.
const Counter = ({ firstNum, secondNum, handlemath, result, update }) => <div>
  <h1>{result}</h1>

  <input type='text' value={firstNum} onChange={update} />
  <select type='text' value={handlemath} onchange={update}>
    <option>+</option>
    <option>-</option>
    <option>*</option>
    <option>/</option>
  </select>
  <input type='text' value={secondNum} onChange={update} />
  <button onClick={result.bind(null, 1)}>=</button>
</div>

// We need to create two functions, one to handle incoming state
// and the other to handle outgoing dispatches. These two functions
// are always called the same thing: mapStateToProps and mapDispatchToProps

// mapStateToProps takes the state (and optionally the props coming in)
// and returns an object that will be merged with the props. In other
// words, if Counter took a title prop, this function would add a count prop.
// Whenever state updates, this component will rerender with the new count.
const mapStateToProps = state => {
  return state // STATE IS INCOMING FROM THE STORE!
}

// The dispatch function is automatically passed in, but we can also create
// functions to handle our actions and pass them in as props. This function
// is always called mapDispatchToProps. Can you see why? Think about it.
// handleIncrement and handleDecrement are callback functions, so they must
// be functions. We don't need parameters. When each is called, it
// simply dispatches the correct action (increment/decrement) to the store.
const mapDispatchToProps = dispatch => {
  return { // DISPATCH IS OUTGOING TO THE STORE!
    firstNum: num => dispatch({ type: FIRSTNUM, payload: event.target.value }),
    secondNum: num => dispatch({ type: SECONDNUM, payload: event.target.value }),
    handleMath: math => dispatch({ type: MATHSIGN }),
    handleResult: num => dispatch({ type: RESULT }),
    update: event => dispatch({ type: UPDATE, payload: event.target.value })
  }
}

// First we call connect() passing in the (optional) mapStateToProps and
// mapDispatchToProps functions. connect() returns a function. We then call that
// function immediately, passing in the object we want to wrap ("connect" to
// the store). This returnes a wrapped React component that works just like an
// unwrapped component except that it is connected to the store. Nice and simple.
export default connect(mapStateToProps, mapDispatchToProps)(Counter) // INCOMING AND OUTGOING
