import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import EventList from './components/event-list'
import Admin from './components/admin'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={EventList} />
    <Route path='admin' component={Admin} />
  </Route>
)
