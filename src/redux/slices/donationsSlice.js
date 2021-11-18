const initialState = {
    donations: []
}

const donationsSlice = (state = initialState, action) => {
    let donationsCopy = [...state.donations];
    switch(action.type){
        case "SET_DONATIONS": {
            donationsCopy = action.payload;
            return {
                ...state,
                donations: donationsCopy
            }
        }
        default: return state;
    }
}

export default donationsSlice;