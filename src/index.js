import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';

import App from './routes/App';
import './index.scss';
import store from './models/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
