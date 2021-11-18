let savedEmail = localStorage.getItem("email");
let savedRole = localStorage.getItem("role");
let savedUserStatus = localStorage.getItem("userStatus");
let savedAccess = localStorage.getItem("access")


const initialState = {
    currUser: 
        savedEmail === null ?
        {
            emial: "",
            role: "",
            access: "",
            userStatus: "",
        }
        :
        {
            emial: savedEmail,
            role: savedRole,
            access: savedAccess,
            userStatus: savedUserStatus,
        }
}

const loginSlice = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER_INFO": {
            localStorage.setItem("email", action.payload.email)
            localStorage.setItem("access", action.payload.access)
            localStorage.setItem("role", action.payload.role)
            localStorage.setItem("userStatus", action.payload.userStatus)
            return {
                ...state,
                currUser: action.payload
            }
        }
        default: return state;
    }
}

export default loginSlice;