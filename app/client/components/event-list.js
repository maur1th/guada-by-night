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
        <td>{moment(date).format('YYYY-MM-DD HH:mm')}</td>
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
      <div>
        <h1>All events in Guada</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map( evt => this.renderRow(evt) )}
          </tbody>
        </table>
      </div>
    )
  }
})
