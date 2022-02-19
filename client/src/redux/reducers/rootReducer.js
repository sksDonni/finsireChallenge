import { combineReducers, applyMiddleware, createStore } from "redux";
import React from "react";
import thunk from "redux-thunk";
import logger from "redux-logger";
import datasetReducer from './datasetReducer'

function rootReducer() {
  const store = createStore(
    combineReducers({
      datasetReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
}

export default rootReducer;
