import React from 'react'
import ReactDOM from 'react-dom'

const Hello = function (props) {
  return {
    props,
    render () {
      const { word } = this.props
      return (
        <p>Hello, {word}!</p>
      )
    }
  }
}

ReactDOM.render(
  <Hello word="world" />,
  document.getElementById('content')
)
