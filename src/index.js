import React from 'react' // Needed on every page with JSX

import { render } from 'react-dom' // Only needed for the render method

// createStore is used to convert a reducer into a store
// a store provides getState() to get the current state
// dispatch() to dispatch new actions to the reducer
// resulting in a new state, and subscribe() to provide
// callback functions to the store that will be called
// with the new state whenever the state changes
import { createStore } from 'redux'

// The Provider is a React component that wraps other components
// and takes a redux store prop, which it then places in the
// context so it can be used in any subcomponent
import { Provider } from 'react-redux'

import App from './App'

// We wrote our own reducer to handle increment and decrement
// See the /src/state/reducer file for details
import { reducer } from './state/reducer'

// We can import CSS directly and it will be bundled into our
// app by webpack
import './index.css'

// Here is what was causing the problem with Redux DevTools.
// I forgot that we have to add DevTools "middleware" to the
// store, so that it captures the actions and the changes to
// state and sends them to Redux DevTools. Install Redux
// DevTools and see how redux works. This call to createStore()
// takes the reducer imported above and creates the store
// with getState(), dispatch(), and subscribe() methods.
// Log it out to see.
const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

// React can be used natively as well as with the DOM, so ReactDOM
// is loaded separately (see the import above). The only function
// we need from it is the render() function, which takes the root
// React element to render, and the node into which to render it.
// The Provider wraps the root element passing the store down
// through the context and handling the subscribing for us.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

