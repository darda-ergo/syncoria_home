import * as api from "../api/index.js";
import { FETCH_ALL, FETCH_ALL_SERVICE_FIELD } from "../constants/actionTypes";

export const getServices = () => async (dispatch) => {
  try {
    const { data } = await api.fetchServices();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getServiceField = (service) => async (dispatch) => {
  try {
    const { data } = await api.getServiceField(service);

    dispatch({ type: FETCH_ALL_SERVICE_FIELD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
