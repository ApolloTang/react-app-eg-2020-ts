import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import App from 'app/';
import {store} from './store';
import {Provider} from 'react-redux';

const Root = () => (
  <div className="root">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </div>
);

export {Root};
