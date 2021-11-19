import Axios from "axios";
import { useState } from 'react';
import {connect} from "react-redux";

const BeneficiaryEditForm = (props) => {
    let [beneficiaryName, setBeneficiaryName] = useState(props.beneficiary.name)
    let [beneficiaryAddress, setBeneficiaryAddress] = useState(props.beneficiary.address)
    let [beneficiaryContactNum, setBeneficiaryContactNum] = useState(props.beneficiary.contactNum)
    let [beneficiaryDescription, setBeneficiaryDescription] = useState(props.beneficiary.description)
    let [beneficiaryWebsite, setBeneficiaryWebsite] = useState(props.beneficiary.website)
    let [status, setStatus] = useState("active")
    let [photo, setPhoto] = useState(props.beneficiary.photo)
    
    let handleEdit = (e) => {
        e.preventDefault();
        if (photo === null) {
            return
        }
        let editBeneficiaryData = new FormData();
        editBeneficiaryData.append('name', beneficiaryName)
        editBeneficiaryData.append('address', beneficiaryAddress)
        editBeneficiaryData.append('contactNum', beneficiaryContactNum)
        editBeneficiaryData.append('description', beneficiaryDescription)
        editBeneficiaryData.append('website', beneficiaryWebsite)
        editBeneficiaryData.append('status', status)
        editBeneficiaryData.append('photo', photo)
        Axios.put(props.axiosPort + 'beneficiaries/' + props.beneficiary._id, editBeneficiaryData, {
            headers:{
                'content-type': 'multipart/form-data',
                authorization: props.currUser.access
            }
        })
        .then (res => {
            props.editBeneficiary(res.data);
            props.setEditList(null);
        })
    }
    return (
    <>
    <div>
        <div className="beneListBox editform">
            <div className="beneName">
                <h2>
                    <input type="text" value={beneficiaryName} onChange={e => setBeneficiaryName(e.target.value)} />
                </h2>
            </div>

            <div className="beneAddress">
                <div>
                    <input type="text" value={beneficiaryAddress} onChange={e => setBeneficiaryAddress(e.target.value)} />
                </div>
            </div>

            <div className="beneContact">
                <div>
                    <input type="number" value={beneficiaryContactNum} onChange={e => setBeneficiaryContactNum(e.target.value)} />
                </div>
            </div>

            <div className="beneDesc">
                <div>
                    <textarea type="text" value={beneficiaryDescription} onChange={e => setBeneficiaryDescription(e.target.value)} />
                </div>
            </div>

            <div className="beneWebsite">
                <div>
                    <input type="text" value={beneficiaryWebsite} onChange={e => setBeneficiaryWebsite(e.target.value)} />
                </div>
            </div>
            <div>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option>active</option>
                    <option>inactive</option>
                </select>
            </div> 
            <div className="benePhoto">
                <div>
                <input
                    className="addBenePhoto inputBene"
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={e => setPhoto(e.target.files[0])} />
                </div>
            </div>
        <button 
        className="beneEditBtn"
        onClick={handleEdit}>
            Update
        </button>
        </div>


    </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        currUser: state.loginSlice.currUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editBeneficiary: (beneficiary) => dispatch({
            type: 'EDIT_BENEFICIARY',
            payload: beneficiary
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryEditForm);