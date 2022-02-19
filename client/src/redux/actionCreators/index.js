import * as ActionTypes from "../ActionTypes";
import * as API from "../API";

export const getData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.DATA_LOADING,
  })
  const { data } = await API.getData();
  console.log(data);
  dispatch({
    type: ActionTypes.GET_DATASET,
    payload: data[0].data
  });
};

export const addElement = (element) => async (dispatch) => {
  dispatch({type: ActionTypes.DATA_LOADING})
  const { data } = await API.addElements(element);
  console.log(data);
  var dataArray = data[0].data
  console.log(dataArray)
  dispatch({
    type: ActionTypes.ADD_ELEMENT,
    payload: dataArray,
  });
};

export const createNewDataset = () => async (dispatch) => {
  const {data} = await API.newDataset()
  dispatch({
    type: ActionTypes.CREATE_NEW_DATASET,
  })
}
