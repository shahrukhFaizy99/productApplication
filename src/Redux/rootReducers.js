import { combineReducers } from "redux";
import authReducers from "./auth/authReducers";

var rootReducers = combineReducers({
  auth: authReducers,
});

export default rootReducers;
