import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  state = {
    bands: []
  }

  addBand = (event) => { // pass in this function just as a reference no () otherwise unrecognized error emerges
    event.preventDefault()
    this.setState({
      bands: this.state.bands.concat({name: event.target.children[0].value})
    })
    console.log(this.state)
    this.props.dispatch({type: 'ADD_BAND', band: event.target.children[0].value}) //use the controled state value from the form
  }

  renderBands = () => {
    return this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand}/> 
        <div>
        <ul>
          { this.renderBands()}
        </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);

// export default BandsContainer
