import React from 'react'
import { Stock } from './Stock'

export const Locations = props => {
  const { data } = props
  return data.map((loc, i) => {
    return (
      <div key={ i }>
        { /* name is the top-most property of each location, so make it h3 */ }
        <h3>Location Name: { loc.name }</h3>
        { /* stock is an array of stock data, so add it as a section and abstract rendering for ease of reading */ }
        <Stock stock={ loc.stock } />
      </div>
    )
  })
}
