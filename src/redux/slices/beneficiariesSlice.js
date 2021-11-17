const initialState = {
    beneficiaries: []
}

const beneficiariesSlice = (state = initialState, action) => {
    switch(action.type) {
        case "SET_BENEFICIARIES": {
            return {
                ...state,
                beneficiaries: action.payload
            }
        }
        case "ADD_BENEFICIARY": {
            let beneficiaryCopy = [...state.beneficiaries, action.payload]
            return  {
                ...state,
                beneficiaries: beneficiaryCopy
            }
        }
        case "EDIT_BENEFICIARY": {
            let beneficiaryCopy = [...state.beneficiaries]
            let index = beneficiaryCopy.findIndex( (beneficiary) => beneficiary._id === action.payload._id);
            if (index !== -1)
            beneficiaryCopy[index] = action.payload
            return {
                ...state,
                beneficiaries: beneficiaryCopy
            }
        }
        case "DEL_BENEFICIARY": {
            let beneficiaryCopy = [...state.beneficiaries]
            let index = beneficiaryCopy.findIndex( (beneficiary) => beneficiary._id === action.payload._id);
            if ( index !== -1 )
            beneficiaryCopy.splice(index, 1)
            return  {
                ...state,
                beneficiaries: beneficiaryCopy
            }
        }
        default: return state;
    }
}

export default beneficiariesSlice;