import React from 'react'
import { connect } from 'react-redux'

import { UPDATE_OP, UPDATE_X, UPDATE_Y, UPDATE_EQUALS } from '../state/reducer'

const Counter = props => {
  const { x, y, op, equals, handleSelect, handleChangeX, handleChangeY, handleEquals } = props

  return <div>
           <h1>{x} {op} {y} = {equals}</h1>
           <input type='text' value={x} onChange={handleChangeX} />
           <select onChange={handleSelect}>
             <option value='+'>
               +
             </option>
             <option value='-'>
               -
             </option>
             <option value='*'>
               *
             </option>
             <option value='/'>
               /
             </option>
           </select>
           <input type='text' value={y} onChange={handleChangeY} />
           <button value='=' onClick={handleEquals}>
             =
           </button>
         </div>
}

const mapStateToProps = state => {
  return { op: state.op, x: state.x, y: state.y, equals: state.equals }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSelect: event => {
      dispatch({ type: UPDATE_OP, payload: { op: event.target.value } })
    },
    handleChangeX: event => {
      dispatch({ type: UPDATE_X, payload: { x: parseInt(event.target.value, 10) || '' } })
    },
    handleChangeY: event => {
      dispatch({ type: UPDATE_Y, payload: { y: parseInt(event.target.value, 10) || '' } })
    },
    handleEquals: event => {
      dispatch({ type: UPDATE_EQUALS })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
