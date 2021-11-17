const initialState = {
    axiosPort: "http://localhost:8000/",
    activePage: "home",
}

const navSlice = (state = initialState, action) => {
    switch(action.type){
        case "SET_ACTIVE_PAGE": {
            return {
                ...state,
                activePage: action.payload
            }
        }
        default: return state;
    }
}

export default navSlice;