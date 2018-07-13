import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './RangeSlider.css'

class RangeSlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slots: 20,
      default: 0
    }
    this.updateSlider = this.updateSlider.bind(this)
    this.myRef = React.createRef()
  }

  updateSlider () {
    const domElement = ReactDOM.findDOMNode(this.refs.rangeBar)
    console.log(domElement)
  }
  render () {
    return (
      <div ref='container' className='slider-container'>
        <div onClick={this.updateSlider} className='rangeBar' />
        <div ref='pin' className='dot' />
      </div>
    )
  }
}

export default RangeSlider
