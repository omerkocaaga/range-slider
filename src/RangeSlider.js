import React from 'react'
import Knob from './components/Knob'
import Track from './components/Track'

class RangeSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dragging: false,
      posX: 0,
      trackWidth: 300,
      knobWidth: 20
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }
  componentDidMount () {
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  componentWillUnmount () {
    window.removeEventListener('mouseup', this.handleMouseUp)
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
  handleMouseMove (event) {
    const { dragging, trackWidth, knobWidth } = this.state
    const posX = event.clientX - knobWidth
    if (dragging) {
      this.setState({
        posX: posX > trackWidth ? trackWidth - knobWidth : posX
      })
    }
  }
  handleMouseUp (event) {
    event.preventDefault()
    console.log('up')
    this.setState({
      dragging: false
    })
  }
  handleMouseDown (event) {
    event.preventDefault()
    console.log('down')
    this.setState({
      dragging: true
    })
  }

  render () {
    const { trackWidth = 300, posX = 0, knobWidth = 20 } = this.state
    return (
      <div
        onMouseMove={event => {
          this.handleMouseMove(event)
        }}
        style={{ margin: 20 }}
      >
        <Track trackWidth={trackWidth} />
        <Knob
          handleMouseDown={this.handleMouseDown}
          posX={posX}
          knobWidth={knobWidth}
        />
      </div>
    )
  }
}

export default RangeSlider
