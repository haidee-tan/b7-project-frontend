import {useState} from "react";
import {connect} from "react-redux";
import Axios from "axios";

const SignUp = (props) => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [role, setRole] = useState("sponsor");
    let [password, setPassword] = useState("");
    let [passwordConfirm, setPasswordConfirm] = useState("");

    let [firstNameErrMsg, setFirstNameErrMsg] = useState("");
    let [lastNameErrMsg, setLastNameErrMsg] = useState("");
    let [emailErrMsg, setEmailErrMsg] = useState("");
    let [passwordErrMsg, setPasswordErrMsg] = useState("");
    let [passwordConfirmErrMsg, setPasswordConfirmErrMsg] = useState("");

    let [modalMsg, setModalMsg] = useState("");
    let [modalDisp, setModalDisp] = useState(false);
    let [acctCreated, setAcctCreated] = useState(false);

    let emptyFieldMsg = "This field cannot be empty.";

    const handleSignUp = () => {
        firstName.trim() === "" ? setFirstNameErrMsg(emptyFieldMsg) : setFirstNameErrMsg("");
        lastName.trim() === "" ? setLastNameErrMsg(emptyFieldMsg) : setLastNameErrMsg("");
        email.trim() === "" ? setEmailErrMsg(emptyFieldMsg) : setEmailErrMsg("");
        password.trim() === "" ? setPasswordErrMsg(emptyFieldMsg) : setPasswordErrMsg("");
        passwordConfirm.trim() === "" ? setPasswordConfirmErrMsg(emptyFieldMsg) : setPasswordConfirmErrMsg("");
        password !== passwordConfirm ? setPasswordConfirmErrMsg("Passwords did not match.") : setPasswordConfirmErrMsg("");

        if (
            firstName.trim() !== "" &&
            lastName.trim() !== "" &&
            email.trim() !== "" &&
            password.trim() !== "" &&
            passwordConfirm.trim() !== "" &&
            password === passwordConfirm
        ) {
            let status;
            role === "sponsor" ?  status = "active" : status = "for approval";
            let newUser = {
                firstName,
                lastName,
                email,
                role,
                password,
                status
            }
            Axios.post(props.axiosPort + "users/signup", newUser)
            .then(res => {
                if(res.data.code === 11000) {
                    setModalDisp(false);
                    setModalMsg("");
                    setAcctCreated(false);
                    setEmailErrMsg("Account already created for this email address.");
                }
                else {
                    setModalDisp(true);
                    setModalMsg("Account created successfully.");
                    setAcctCreated(true);
                }
            })
            setModalDisp(true);
            setModalMsg("Preparing your account...");
        }
    }

    const handleModalOkBtn = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setRole("sponsor");
        setPassword("");
        setPasswordConfirm("");
        setModalMsg("");
        setModalDisp(false);
        setAcctCreated(false);
        // log in user. route to home page.
    }

    return (
        <div id="sign-up">
            <h2>Create an account today.</h2>
            <div>
                <div>First Name</div>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <div>{firstNameErrMsg}</div>
            </div>
            <div>
                <div>Last Name</div>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                <div>{lastNameErrMsg}</div>
            </div>
            <div>
                <div>Email Address</div>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <div>{emailErrMsg}</div>
            </div>
            <div>
                <div>Choose account type</div>
                <select value={role} onChange={e => setRole(e.target.value)}>
                    <option>sponsor</option>
                    <option>partner</option>
                </select>
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
            <div>
                <button onClick={handleSignUp}>Sign up</button>
            </div>
            {
                modalDisp ?
                <div className="modal">
                    <div>Kaserolla</div>
                    <div>{modalMsg}</div>
                    {
                        acctCreated ? 
                        <button onClick={handleModalOkBtn}>Ok</button>
                        : null
                    }
                </div>
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort
    }
}

export default connect(mapStateToProps)(SignUp);