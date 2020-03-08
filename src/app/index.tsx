import React from 'react';
import SimpleNavigation from 'common/components/core/simple-navigation';

import {Routes, navigationDirective} from './routes';

const App = () => (
  <div className="app">
    <div className="app-navigation-container">
      <SimpleNavigation navigations={navigationDirective} />
    </div>
    <div className="app-workspace">
      <Routes />
    </div>
  </div>
);

export default App;
