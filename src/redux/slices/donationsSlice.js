const initialState = {
    donations: []
}

const donationsSlice = (state = initialState, action) => {
    let donationsCopy = [...state.donations];
    let index;
    switch(action.type){
        case "SET_DONATIONS": {
            donationsCopy = action.payload;
            return {
                ...state,
                donations: donationsCopy
            }
        }
        case "DELETE_DONATION": {
            index = state.donations.findIndex(el => el._id === action.payload);
            if (index !== -1) {donationsCopy.splice(index, 1)}
            return {
                ...state,
                donations: donationsCopy
            }
        }
        default: return state;
    }
}

export default donationsSlice;