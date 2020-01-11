import React from 'react'
import './App.css'
import json from './api-data.json'
import { Rows } from './Rows'

export const App = () => {
  return (
    <div className="app">
      { /* label is the top-most property, so add to header and make h1 */ }
      <header>
        <h1>Label: { json.label }</h1>
      </header>
      { /* row is an array of levels, so abstract rendering for ease of reading / reasoning */ }
      <section>
        <Rows json={ json } />
      </section>
    </div>
  )
}
