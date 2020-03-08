import {combineReducers} from 'redux';

import {resources} from 'app/resources/reducer';
import {usersPage} from 'pages/users/containers/reducer';

const rootReducer: any = combineReducers({
  resources,
  usersPage,
});

export {rootReducer};
