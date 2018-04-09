import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';

class Loader extends Component {
  render() {
    return (
      <CircularProgress 
        size={this.props.size} 
        thickness={this.props.thickness} 
        min={1000}
        style={{position: "absolute", left: "40%", top: "36%"}}
      />
    )
  }
}

export default Loader;