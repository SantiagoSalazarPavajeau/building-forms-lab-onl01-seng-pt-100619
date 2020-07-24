// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.props.addBand(event)}>
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput
