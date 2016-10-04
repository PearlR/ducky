import React from 'react' 
import { addIndex, map, splitEvery } from 'ramda'

import data from './data'
import BoxRow from './components/BoxRow' 

const indexedMap = addIndex(map)

const App = () => {
  
  const rows = indexedMap((row, idx) => {
    return <BoxRow data={row} key={idx} row={idx} />
  }, splitEvery(3, data))

	return <div>
	  <h1 className='main-title'>Website Wireframe</h1>
	  {rows}
	</div>
}

export default App
