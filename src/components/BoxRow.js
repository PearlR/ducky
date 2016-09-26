import React from 'react'
import { find, map } from 'ramda'
import { connect } from 'react-redux'

import Box from './Box'
import BoxDetails from './BoxDetails'

import { TOGGLE_DETAILS } from '../state/reducer'

const BoxRow = ({ row, data, open, handleClick }) => {
	const content = find(box => {
		return box.id === open[row]
	}, data) || {}

	const boxes = map(box => {
		return <Box 
			id={box.id} 
			key={box.id} 
			heading={box.title} 
			content={box.tagline} 
			handleClick={handleClick}
		/>
	}, data) 

	return <div>
		<div className='row'>
			<div className='boxes'>
				{boxes}
			</div>
			<BoxDetails content={content.details}/>
		</div>
	</div>
}

const mapStateToProps = ({ open }) => {
	return {
		open
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: event => {
			dispatch({ type: TOGGLE_DETAILS, payload: { box: event.currentTarget.id, row: ownProps.row } })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxRow)
