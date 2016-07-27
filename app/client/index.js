import React from 'react'
import ReactDOM from 'react-dom'
import EventList from './components/event-list'

ReactDOM.render(
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <EventList />
    </div>
  </div>,
  document.getElementById('content')
)
