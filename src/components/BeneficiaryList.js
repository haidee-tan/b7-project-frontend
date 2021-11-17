// 
import { connect } from "react-redux";
import { useState} from "react"
import Axios from "axios";

const BeneficiaryList = (props) => {

    let [beneficiaryName, setBeneficiaryName] = useState(props.beneficiary.name)
    let [beneficiaryAddress, setBeneficiaryAddress] = useState(props.beneficiary.address)
    let [beneficiaryContactNum, setBeneficiaryContactNum] = useState(props.beneficiary.contactNum)
    let [beneficiaryDescription, setBeneficiaryDescription] = useState(props.beneficiary.description)
    let [beneficiaryWebsite, setBeneficiaryWebsite] = useState(props.beneficiary.website)
    let [beneficiaryPhoto, setBeneficiaryPhoto] = useState(props.beneficiary.photo)
    
    let handleDel = () => {
        Axios.delete(props.axiosPort + 'beneficiaries/' + props.beneficiary._id)
        .then(res => {
            props.delBeneficiary(res.data)
        })
    }

    let handleEdit = () => {
        let editedBeneficiary = {
            name: beneficiaryName, 
            address: beneficiaryAddress,
            contactNum: beneficiaryContactNum,
            description: beneficiaryDescription,
            website: beneficiaryWebsite,
            photo: beneficiaryPhoto,
        }
        Axios.put(props.axiosPort + 'beneficiaries/' + props.beneficiary._id, editedBeneficiary)
        .then (res => {
            props.editBeneficiary(res.data)
        })
    }

    return (
        <div className="beneListContainer">
            <div className="beneListBox">
                <div className="beneName">
                    <h2>{props.beneficiary.name}</h2>
                    <input value={beneficiaryName} onChange={e => setBeneficiaryName(e.target.value)} />
                </div>
                <div className="beneAddress">
                    <div>{props.beneficiary.address}</div>
                    <input value={beneficiaryAddress} onChange={e => setBeneficiaryAddress(e.target.value)} />
                </div>
                <div className="beneContact">
                    <div>{props.beneficiary.contactNum}</div>
                    <input value={beneficiaryContactNum} onChange={e => setBeneficiaryContactNum(e.target.value)} />
                </div>
                <div className="beneDesc">
                    <div>{props.beneficiary.description}</div>
                    <input value={beneficiaryDescription} onChange={e => setBeneficiaryDescription(e.target.value)} />
                </div>
                <div className="beneWebsite">
                    <div>{props.beneficiary.website}</div>
                    <input value={beneficiaryWebsite} onChange={e => setBeneficiaryWebsite(e.target.value)} />
                </div>
                <div className="benePhoto">
                    <div >
                        <img className="beneImg" src={props.beneficiary.photo} alt={props.beneficiary.name}/>
                    </div>
                    <input value={beneficiaryPhoto} onChange={e => setBeneficiaryPhoto(e.target.value)} />
                </div>
            </div>
            <div>
                <button 
                    className="beneEditBtn"
                    onClick={handleEdit}
                >Edit</button>
                <button 
                    className="beneDelBtn"
                    onClick={handleDel}
                >Delete</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delBeneficiary: (beneficiary) => dispatch ({
            type: 'DEL_BENEFICIARY',
            payload: beneficiary
        }),
        editBeneficiary: (beneficiary) => dispatch ({
            type: 'EDIT_BENEFICIARY',
            payload: beneficiary
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryList);