import React from 'react'
import './App.css'

import SelectableGrid from './components/SelectableGrid.jsx'

const App = () => {
  return (
    <div>
      <h1>Selectable Grid</h1>
      <SelectableGrid rows={15} cols={15} />
    </div>
  )
}

export default App
