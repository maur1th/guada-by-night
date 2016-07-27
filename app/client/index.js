import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

ReactDOM.render(
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <Router history={browserHistory} routes={routes} />
    </div>
  </div>
  , document.getElementById('content')
)
