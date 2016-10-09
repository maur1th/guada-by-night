import React from 'react'
import axios from 'axios'
import moment from 'moment-timezone'

export default React.createClass({
  loadEventsFromServer() {
    return axios.get('http://localhost:8080/api/events')
      .then( res => this.setState({ events: res.data }))
  },
  renderRow({ _id, date, title, tags }) {
    return (
      <tr key={_id}>
        <td>{moment(date).format('dddd MMMM Do YYYY, HH:mm')}</td>
        <td>{title}</td>
        <td>{tags}</td>
      </tr>
    )
  },
  getInitialState() {
    return {events: []}
  },
  componentDidMount() {
    this.loadEventsFromServer()
  },
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className='col-md-4'>Date</th>
            <th className='col-md-4'>Title</th>
            <th className='col-md-4'>Tags</th>
          </tr>
        </thead>
        <tbody>
          {this.state.events.map( evt => this.renderRow(evt) )}
        </tbody>
      </table>
    )
  }
})
