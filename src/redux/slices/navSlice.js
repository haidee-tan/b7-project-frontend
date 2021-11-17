const initialState = {
    axiosPort: "http://localhost:8000/",
    activePage: "home",
}

const navSlice = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default navSlice;