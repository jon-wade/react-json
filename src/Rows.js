import React from 'react'
import { Locations } from './Locations'

export const Rows = props => {
  const { json } = props
  if (json.row && json.row.length > 0) {
    return json.row.map((row, i) => {
      return (
        <div key={ i }>
          { /* level is the top-most property of each row, so make it h2 */ }
          <h2>Level: { row.level }</h2>
          { /* locations is an array of location data, abstract rendering for ease of reading / reasoning */ }
          <Locations data={ row.locations } />
        </div>
      )
    })
  }
}
