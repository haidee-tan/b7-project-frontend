import { combineReducers } from "redux";
import navSlice from "./slices/navSlice";
import beneficiariesSlice from "./slices/beneficiariesSlice";
import postsSlice from "./slices/postsSlice";

const rootReducer = combineReducers({
    navSlice,
    beneficiariesSlice,
    postsSlice,
});

export default rootReducer;