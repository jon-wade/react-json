import React from 'react'

export const StockVisibilitySwitcher = props => {
  const { checked, handleCheckboxChange } = props
  return (
    <React.Fragment>
      <h4>Show Stock?</h4>
      <input
        type="checkbox"
        checked={ checked }
        onChange={ e => handleCheckboxChange(e) }
      />
    </React.Fragment>
  )
}
