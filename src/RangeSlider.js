import React from 'react'
import Knob from './components/Knob'
import Track from './components/Track'
import './RangeSlider.css'

class RangeSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dragging: false,
      posX: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    // console.log(props)
  }
  componentDidMount () {
    window.addEventListener('mouseup', this.handleMouseUp)
  }
  componentWillUnmount () {
    window.removeEventListener('mouseup', this.handleMouseUp)
  }
  handleMouseMove (event) {
    const { dragging } = this.state
    const posX = event.clientX - 20
    if (dragging) {
      this.setState({
        posX: posX
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
    console.log(this.state.dragging)
    return (
      <div
        onMouseMove={event => {
          this.handleMouseMove(event)
        }}
        className='slider-container'
      >
        <Track />
        <Knob handleMouseDown={this.handleMouseDown} posX={this.state.posX} />
      </div>
    )
  }
}

export default RangeSlider
