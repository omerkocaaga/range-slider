import React, { Component } from 'react'

class Track extends Component {
  render () {
    const { trackWidth = 300 } = this.props
    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'blanchedalmond',
          width: trackWidth,
          height: 10
        }}
      />
    )
  }
}

export default Track
