import React, { Component } from 'react'

class Track extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trackWidth: 300
    }
  }
  render () {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'blanchedalmond',
          width: this.state.trackWidth,
          height: 10
        }}
      />
    )
  }
}

export default Track
