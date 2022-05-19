import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({

});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
