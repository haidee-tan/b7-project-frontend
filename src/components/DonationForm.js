import { useState } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import DonationFormModal from "./DonationFormModal";
import Moment from "moment";

const DonationForm = (props) => {
    let {_id, name, description, availability, price, quantity, photo} = props.donationData;
    let [donationQty, setDonationQty] = useState(1);
    let [paymentMethod, setPaymentMethod] = useState("Bank transfer");
    let [paymentNotes, setPaymentNotes] = useState("");
    let [beneficiary, setBeneficiary] = useState("");
    let [donationModalDisp, setDonationModalDisp] = useState(false);
    let [modalDispData, setModalDispData] = useState("");
    let [systemMsg, setSystemMsg] = useState("");

    let handleDonate = () => {
        if (donationQty === 0 || paymentMethod === "" || beneficiary === "") {
            setSystemMsg("Please check all fields.");
            setModalDispData("error");
            setDonationModalDisp(true);
        }
        else {
            let donation = {
                quantity: donationQty,
                paymentMethod,
                paymentNotes,
            };
            Axios.post(`${props.axiosPort}donations/create/post/${_id}/${beneficiary}`, donation, {headers: {authorization: props.currUser.access}})
            .then(res => {
                setSystemMsg("Successful! Thank you for your donation.");
                setModalDispData("success");
                setDonationModalDisp(true);
                props.adjPostQty(res.data);
            })
        }
    }
    let handleCancel = () => {
        props.setModalDisp(false);
    }
    return(
        <div>
            {
                !donationModalDisp ?
                <div className="donation-form modal">
                    <h3>Roll the Kaserolla!</h3>
                    <div className="donation-form-body modal-body">
                        <div className="donation-img">
                            <img src ={photo} alt ={name}/>
                        </div>
                        <div className="donation-details">
                            <div>
                                <h4>{name}</h4>
                            </div>
                            <div>
                                <p>Description:</p>
                                <p>{description}</p>
                            </div>
                            <div>
                                <p>Available until:</p>
                                <p>{Moment(availability).format("MMM-DD-YY")}</p>
                            </div>
                            <div>
                                <p>Price:</p>
                                <p>{price}</p>
                            </div>
                            <div>
                                <p>Quantity:</p>
                                <p>{quantity}</p>
                            </div>
                        </div>
                        <div className="donation-fields">
                            <h4>Donation Details</h4>
                            <div>
                                <p>Quantity:</p>
                                <input
                                    type = "number"
                                    value = {donationQty}
                                    onChange = {e => setDonationQty(e.target.value)}
                                    min = "1"
                                    max = {quantity}
                                />
                            </div>
                            <div>
                                <p>Total Amount:</p>
                                <p>{donationQty * price}</p>
                            </div>
                            <div>
                                <p>Payment Method:</p>
                                <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
                                    <option>Bank transfer</option>
                                    <option>Gcash</option>
                                    <option>Paymaya</option>
                                </select>
                            </div>
                            <div>
                                <p>Payment Notes:</p>
                                <input
                                    type = "test"
                                    value = {paymentNotes}
                                    onChange = {e => setPaymentNotes(e.target.value)}
                                />
                            </div>
                            <div>
                                <p>Choose beneficiary:</p>
                                <select value={beneficiary} onChange={e => setBeneficiary(e.target.value)}>
                                    <option value="" disabled defaultValue></option>
                                    {
                                        props.beneficiaries.map(beneficiary => 
                                            <option
                                                key={beneficiary._id}
                                                value={beneficiary._id}
                                            >{beneficiary.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button onClick={handleDonate}>Donate</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
                :
                <DonationFormModal
                    setModalDisp = {props.setModalDisp}
                    systemMsg = {systemMsg}
                    setSystemMsg = {setSystemMsg}
                    setDonationModalDisp = {setDonationModalDisp}
                    modalDispData = {modalDispData}
                />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currUser: state.loginSlice.currUser,
        axiosPort: state.navSlice.axiosPort,
        beneficiaries: state.beneficiariesSlice.beneficiaries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjPostQty: (post) => dispatch({
            type: "ADJ_POST_QTY",
            payload: post
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);