import React from 'react'

function initialState() {
  console.log('expensive calculation')
  return 0
}

export default function App() {
  const [state, setState] = useState(initialState())
  return <div></div>
}
