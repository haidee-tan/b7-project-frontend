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
        Axios.delete('http://localhost:8000/beneficiaries/' + props.beneficiary._id)
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
        Axios.put('http://localhost:8000/beneficiaries/' + props.beneficiary._id, editedBeneficiary)
        .then (res => {
            props.editBeneficiary(res.data)
        })
    }

    let changeName = (e) => {
    setBeneficiaryName(e.target.value)
    }
    let changeAddress = (e) => {
        setBeneficiaryAddress(e.target.value)
    }
    let changeContactNum = (e) => {
    setBeneficiaryContactNum(e.target.value)
    }
    let changeDescription = (e) => {
    setBeneficiaryDescription(e.target.value)
    }
    let changeWebsite = (e) => {
    setBeneficiaryWebsite(e.target.value)
    }
    let changePhoto = (e) => {
    setBeneficiaryPhoto(e.target.value)
    }

    return (
        <>
        
        <div>
            <div>
                {props.beneficiary.name}
        
                <input
                value={beneficiaryName}
                onChange={changeName} />
            </div>

            <div>
                {props.beneficiary.address}

                <input
                value={beneficiaryAddress}
                onChange={changeAddress} />
            </div>

            <div>
                {props.beneficiary.contactNum}

                <input
                value={beneficiaryContactNum}
                onChange={changeContactNum} />
            </div>

            <div>
                {props.beneficiary.description}

                <input
                value={beneficiaryDescription}
                onChange={changeDescription} />
            </div>

            <div>
                {props.beneficiary.website}

                <input
                value={beneficiaryWebsite}
                onChange={changeWebsite} />
            </div>

            <div>
                {props.beneficiary.photo}

                <input
                value={beneficiaryPhoto}
                onChange={changePhoto} />
            </div>
        </div>
        
        <button 
        onClick={handleEdit}>
            EDIT
        </button>

        <button 
        onClick={handleDel}>
            x
        </button>

        </>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        delBeneficiary: (beneficiary) => dispatch ({type: 'DEL_BENEFICIARY', payload: beneficiary}),

        editBeneficiary: (beneficiary) => dispatch ({type: 'EDIT_BENEFICIARY', payload: beneficiary})

    }
}

export default connect(null, mapDispatchToProps)(BeneficiaryList);