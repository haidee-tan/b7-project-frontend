import {useState} from "react";
import {connect} from "react-redux";
import Axios from "axios";


const LogIn = (props) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    let [emailErrMsg, setEmailErrMsg] = useState("");
    let [passwordErrMsg, setPasswordErrMsg] = useState("");

    const handleLogIn = () => {
        email.trim() === "" ? setEmailErrMsg("Please complete all fields.") : setEmailErrMsg("");
        password.trim() === "" ? setPasswordErrMsg("Please complete all fields.") : setPasswordErrMsg("");
        let user = {email, password}
        if (email.trim() !== "" && password.trim() !== "") {
            Axios.post(props.axiosPort + "users/login", user)
            .then(res => {
                if (res.data === "invalid credentials") {
                    return setErrorMsg("Invalid credentials.")
                }
                if (res.data.status !== "active") {
                    return setErrorMsg("Please contact Admin to set account status to active.")
                }
                let loginUser = {
                    role: res.data.role,
                    access: res.data.access,
                    email: res.data.email,
                    status: res.data.status,
                    firstName: res.data.firstName
                }
                props.userInfo(loginUser);
                return window.location.replace("/");
            })
        }
    }

    return (
    <div className="loginBox page">
        <h3>Login</h3>
        <div className="eMail">
            <div>Email Address</div>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <div>{emailErrMsg}</div>
        </div>
        <div className="password">
            <div>Password</div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <div>{passwordErrMsg}</div>
        </div>
        <div className="loginErrMsg">{errorMsg}</div>
        <div className="loginBtn">
            <button 
                className="custom-btn"
                onClick={handleLogIn}
            >Login
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userInfo: (user) => dispatch({
            type: 'SET_USER_INFO', payload: user
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);