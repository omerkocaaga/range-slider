import React from 'react'

class Knob extends React.Component {
  render () {
    const { posX = 0, knobWidth = 20 } = this.props
    return (
      <div
        onMouseDown={this.props.handleMouseDown}
        onMouseUp={this.props.handleMouseUp}
        style={{
          position: 'relative',
          top: 0,
          left: posX < 0 ? 0 : posX,
          backgroundColor: 'brown',
          width: knobWidth,
          height: 10
        }}
      />
    )
  }
}

export default Knob
