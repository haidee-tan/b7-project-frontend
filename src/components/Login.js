import {useState} from "react";
import {connect} from "react-redux";
import Axios from "axios";


const LogIn = (props) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [passwordConfirm, setPasswordConfirm] = useState("");

    let [emailErrMsg, setEmailErrMsg] = useState("");
    let [passwordErrMsg, setPasswordErrMsg] = useState("");
    let [passwordConfirmErrMsg, setPasswordConfirmErrMsg] = useState("");

    let emptyFieldMsg = "This field cannot be empty.";

    const handleLogIn = () => {
        email.trim() === "" ? setEmailErrMsg(emptyFieldMsg) : setEmailErrMsg("");
        password.trim() === "" ? setPasswordErrMsg(emptyFieldMsg) : setPasswordErrMsg("");
        passwordConfirm.trim() === "" ? setPasswordConfirmErrMsg(emptyFieldMsg) : setPasswordConfirmErrMsg("");
        password !== passwordConfirm ? setPasswordConfirmErrMsg("Passwords did not match.") : setPasswordConfirmErrMsg("");
        let user = {
            email,
            password
        }
        Axios.post(props.axiosPort + "users/login", user)
        .then(res => {

        })
    }

    return (
        <>

        <div className="logInBox">
            <div>
                <div>Email Address</div>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <div>{emailErrMsg}</div>
            </div>
            <div>
                <div>Password</div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <div>{passwordErrMsg}</div>
            </div>
            <div>
                <div>Confirm password</div>
                <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                <div>{passwordConfirmErrMsg}</div>
            </div>
            <button onClick={handleLogIn}>Log In</button>
        </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort
    }
}

export default connect(mapStateToProps)(LogIn);