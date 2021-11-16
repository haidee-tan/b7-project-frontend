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
        
        <div className="beneListContainer">
            <div className="beneListBox">

                <div className="beneName">
                    
                    <h2>
                        {props.beneficiary.name}
                    </h2>
            
                    <input
                    value={beneficiaryName}
                    onChange={changeName} />
                </div>

                <div className="beneAddress">
                    <div>
                        {props.beneficiary.address}
                    </div>

                    <input
                    value={beneficiaryAddress}
                    onChange={changeAddress} />
                </div>

                <div className="beneContact">
                    <div>
                        {props.beneficiary.contactNum}
                    </div>

                    <input
                    value={beneficiaryContactNum}
                    onChange={changeContactNum} />
                </div>

                <div className="beneDesc">
                    <div>
                        {props.beneficiary.description}
                    </div>

                    <input
                    value={beneficiaryDescription}
                    onChange={changeDescription} />
                </div>

                <div className="beneWebsite">
                    <div>
                        {props.beneficiary.website}
                    </div>

                    <input
                    value={beneficiaryWebsite}
                    onChange={changeWebsite} />
                </div>

                <div className="benePhoto">
                    <div >
                        <img className="beneImg" src={props.beneficiary.photo}/>
                    </div>
                    

                    <input
                    value={beneficiaryPhoto}
                    onChange={changePhoto} />
                </div>

            </div>
                <button 
                className="beneEditBtn"
                onClick={handleEdit}>
                    EDIT
                </button>

                <button 
                className="beneDelBtn"
                onClick={handleDel}>
                    x
                </button>
        </div>
        

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