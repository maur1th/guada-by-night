import React from 'react'
import EventList from './event-list'

export default function Admin () {
  return (
    <div>
      <h1>Manage events</h1>
      // TODO: Add link to create new event
      <EventList />
    </div>
  )
}
