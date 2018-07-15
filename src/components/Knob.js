import React from 'react'

class Knob extends React.Component {
  constructor (props) {
    super(props)
    this.knob = React.createRef()
    this.state = {
      range: 0
    }
  }

  render () {
    return (
      <div
        onMouseDown={this.props.handleMouseDown}
        onMouseUp={this.props.handleMouseUp}
        ref={this.knob}
        style={{
          position: 'relative',
          top: 0,
          left: this.props.posX,
          backgroundColor: 'brown',
          width: 20,
          height: 15
        }}
      />
    )
  }
}

export default Knob
