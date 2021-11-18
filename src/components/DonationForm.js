import { useState } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import DonationFormModal from "./DonationFormModal";

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
            Axios.post(`${props.axiosPort}donations/create/post/${_id}/${beneficiary}`, donation, /*{headers: {authorization: currentUser.access}}*/)
            .then(res => {
                setSystemMsg("Successful! Thank you for your donation.");
                setModalDispData("success");
                setDonationModalDisp(true);
                props.adjPostQty(res.data);
            })
        }
    }
    return(
        <div className="donation-form">
            <div className="donation-img">
                <img src ={photo} alt ={name}/>
            </div>
            <div>
                <p>Name:</p>
                <p>{name}</p>
            </div>
            <div>
                <p>Description:</p>
                <p>{description}</p>
            </div>
            <div>
                <p>Availability:</p>
                <p>{availability}</p>
            </div>
            <div>
                <p>Price:</p>
                <p>{price}</p>
            </div>
            <div>
                <p>Quantity:</p>
                <p>{quantity}</p>
            </div>
            <div>
                <p>Quantity for donation:</p>
                <input
                    type = "number"
                    value = {donationQty}
                    onChange = {e => setDonationQty(e.target.value)}
                    min = "1"
                    max = {quantity}
                />
            </div>
            <div>
                <p>Total Donation Amount:</p>
                <p>{donationQty * price}</p>
            </div>
            <div>
                <p>Select payment method:</p>
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
            <div>
                <button onClick={handleDonate}>Donate</button>
            </div>
            {
                donationModalDisp ?
                <DonationFormModal
                    setModalDisp = {props.setModalDisp}
                    systemMsg = {systemMsg}
                    setSystemMsg = {setSystemMsg}
                    setDonationModalDisp = {setDonationModalDisp}
                    modalDispData = {modalDispData}
                />
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
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