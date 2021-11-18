import { combineReducers } from "redux";
import navSlice from "./slices/navSlice";
import beneficiariesSlice from "./slices/beneficiariesSlice";
import postsSlice from "./slices/postsSlice";
<<<<<<< HEAD
import donationsSlice from "./slices/donationsSlice";
=======
import loginSlice from "./slices/loginSlice";
>>>>>>> create-log-in-branch

const rootReducer = combineReducers({
    navSlice,
    beneficiariesSlice,
    postsSlice,
<<<<<<< HEAD
    donationsSlice
=======
    loginSlice,
>>>>>>> create-log-in-branch
});

export default rootReducer;