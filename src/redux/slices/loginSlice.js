let savedEmail = localStorage.getItem("email");
let savedRole = localStorage.getItem("role");
let savedStatus = localStorage.getItem("status");
let savedAccess = localStorage.getItem("access");
let savedFirstName = localStorage.getItem("firstName");


const initialState = {
    currUser: 
        savedAccess === null ?
        {
            email: "",
            role: "",
            access: "",
            status: "",
            firstName: ""
        }
        :
        {
            email: savedEmail,
            role: savedRole,
            access: savedAccess,
            status: savedStatus,
            firstName: savedFirstName
        }
}

const loginSlice = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER_INFO": {
            localStorage.setItem("email", action.payload.email)
            localStorage.setItem("access", action.payload.access)
            localStorage.setItem("role", action.payload.role)
            localStorage.setItem("status", action.payload.status)
            localStorage.setItem("firstName", action.payload.firstName)
            return {
                ...state,
                currUser: action.payload
            }
        }
        case "LOGOUT_USER": {
            localStorage.clear();
            let currUserCopy = {
                email: "",
                role: "",
                access: "",
                status: "",
                firstName: ""
            }
            window.location.replace("/");
            return {
                ...state,
                currUser: currUserCopy
            }
        }
        default: return state;
    }
}

export default loginSlice;