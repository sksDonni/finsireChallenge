import * as ActionTypes from "../ActionTypes";

const initialState = {
  data : [],
  numberOfElements : 0,
  dataLoading: false,
  dataUpdating: false
};

const dataset = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.DATA_LOADING:
      return {...state, dataLoading: true}
    
    case ActionTypes.DATA_UPDATING:
      return {...state, dataUpdating: true}
    
    case ActionTypes.GET_DATASET:
      console.log(action.payload)
      var dataset = action.payload
      return {...state, data: dataset, dataLoading: false}

    case ActionTypes.ADD_ELEMENT:
      console.log(action.payload);
      var dataset = action.payload
      return { ...state, data:dataset , dataLoading: false, dataUpdating:false };

    case ActionTypes.CREATE_NEW_DATASET:
      console.log(action.payload);
      return { ...initialState};

    default:
      return state;
  }
};

export default dataset;
