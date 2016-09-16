import React from 'react' // We need this in every file that has JSX

import Counter from './components/Counter' // Import our Counter

// We can render our main App component as a pure function because
// with the Provider and connect, we can handle state outside of the
// React component *at any level*. Nice.
const App = props => <div>
  <h1>My Cool Counter</h1>
  <Counter />
</div>

export default App
