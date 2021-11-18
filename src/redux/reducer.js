import { combineReducers } from "redux";
import navSlice from "./slices/navSlice";
import beneficiariesSlice from "./slices/beneficiariesSlice";
import postsSlice from "./slices/postsSlice";
import loginSlice from "./slices/loginSlice";

const rootReducer = combineReducers({
    navSlice,
    beneficiariesSlice,
    postsSlice,
    loginSlice,
});

export default rootReducer;