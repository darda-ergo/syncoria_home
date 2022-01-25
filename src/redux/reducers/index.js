import { combineReducers } from "redux";
import authReducer from "./authReducer";
import serviveReducer from "./serviceReducer";
import ThemeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
  ThemeReducer,
  authReducer,
  serviveReducer,
});

export default rootReducer;
