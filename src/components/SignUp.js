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
            let newUser = {
                firstName,
                lastName,
                email,
                role,
                password,
                status: "active"
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
                    console.log(res.data)
                    setModalDisp(true);
                    setModalMsg("Account created successfully.");
                    setAcctCreated(true);
                    let loginUser = {
                        role: res.data.role,
                        access: res.data.access,
                        email: res.data.email,
                        status: res.data.status,
                        firstName: res.data.firstName
                    }
                    props.userInfo(loginUser);
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
        return window.location.replace("/");
    }

    return (
        <div id="sign-up" className="page">
            <h2>Create an account today.</h2>
            <div className="info-box">
                <div>
                    <p>
                        By signing up, you can contribute to those who can't have three meals a day. Pick from two account types.
                    </p>
                </div>
                <div>
                    <h3>Partner</h3>
                    <p>
                        Have extra food you want to share? Partner accounts have the privilege to <span className="terms">"stuff the Kaserolla"</span>: post food items up for donation. They can also opt to <span className="terms">"roll the Kaserolla"</span>, meaning they can also donate or move the food to our beneficiaries.
                    </p>
                    <p>
                        As partners, we really need your commitment to post food items at no markup. We don't want greed to eat up our Kaserolla.
                    </p>
                </div>
                <div>
                    <h3>Sponsor</h3>
                    <p>
                        Sponsors can <span className="terms">"roll the Kaserolla"</span>: they can choose to sponsor from the list of food items available for donation and pick their target beneficiaries.
                    </p>
                </div>
            </div>
            <div className="sign-up-box">
                <div>
                    <div>Account type</div>
                    <select value={role} onChange={e => setRole(e.target.value)}>
                        <option>sponsor</option>
                        <option>partner</option>
                    </select>
                </div>
                <div>
                    <div>First Name</div>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <p className="error-msg">{firstNameErrMsg}</p>
                <div>
                    <div>Last Name</div>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <p className="error-msg">{lastNameErrMsg}</p>
                <div>
                    <div>Email Address</div>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <p className="error-msg">{emailErrMsg}</p>
                <div>
                    <div>Password</div>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <p className="error-msg">{passwordErrMsg}</p>
                <div>
                    <div>Confirm password</div>
                    <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                </div>
                <p className="error-msg">{passwordConfirmErrMsg}</p>
                <div className="btn-box">
                    <button onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
            {
                modalDisp ?
                <div className="modal">
                    <h3>Kaserolla</h3>
                    <div className="modal-body">{modalMsg}</div>
                    <div className="btn-box">
                        {
                            acctCreated ? 
                            <button onClick={handleModalOkBtn}>Ok</button>
                            : null
                        }
                    </div>
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
const mapDispatchToProps = (dispatch) => {
    return {
        userInfo: (user) => dispatch({
            type: 'SET_USER_INFO', payload: user
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);