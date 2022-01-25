import { FETCH_ALL, FETCH_ALL_SERVICE_FIELD } from "../constants/actionTypes";
const initialState = {
  serviceList: [],
  serviceFieldList: [],
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      state.services = action.payload;
      return state;

    case FETCH_ALL_SERVICE_FIELD:
      state.serviceFieldList = action.payload;
      return state;

    default:
      return state;
  }
};

export default serviceReducer;
