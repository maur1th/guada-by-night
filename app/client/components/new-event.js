import React from 'react'

export default React.createClass({
  getInitialState() {
    return {title: '', date: '', description: '', tags: []}
  },
  onInputChange(event) {
    this.setState({})
  },
  onFormSubmit() {
    // TODO
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='form-control'
            value={this.state.title}
            onChange={this.onInputChange} />
        </div>
      </form>
    )
  },
})
