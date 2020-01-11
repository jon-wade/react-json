import React, { Component } from 'react'
import { StockVisibilitySwitcher } from './StockVisibilitySwitcher'

// this is only smart component in the repo, which handles state to enable stock to be hidden or shown
export class Stock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
  }

  handleCheckboxChange = e => {
    const { checked } = e.currentTarget
    // store the current state of the checkbox in local state
    this.setState({ checked })
  }

  render () {
    const { stock } = this.props
    const { checked } = this.state
    // As we can't guarantee the contents of the JSON file, add a guard to check for the correct structure
    if (stock.length > 0) {
      return stock.map((stk, i) => {
        const { product, qty, replenishment } = stk
        // Each element of stock content is enclosed in a section tag as it represents a distinct content unit
        return (
          <section key={ i }>
            <StockVisibilitySwitcher
              checked={ checked }
              handleCheckboxChange={ this.handleCheckboxChange }
            />
            { /* this is the rendering mechanism for showing or hiding stock content */ }
            { this.state.checked &&
            <ul>
              <li>Product: { product }</li>
              <li>Quantity: { qty }</li>
              <li>Replenishment: { replenishment }</li>
            </ul> }
          </section>
        )
      })
    } else {
      // this ensures that if stock information is missing, the user is provided with a warning rather than no content
      return (
        <section>
          <StockVisibilitySwitcher
            checked={ checked }
            handleCheckboxChange={ this.handleCheckboxChange }
          />
          { this.state.checked && <p className="no-stock">No stock data available</p> }
        </section>
      )
    }
  }
}
