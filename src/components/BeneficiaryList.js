import { connect } from "react-redux";
import { useState} from "react"
import Axios from "axios";

const BeneficiaryList = (props) => {

    let [beneficiaryName, setBeneficiaryName] = useState(props.beneficiary.name)
    
    let handleDel = () => {
        Axios.delete('http://localhost:8000/beneficiaries/' + props.beneficiary._id)
        .then(res => {
            props.delBeneficiary(res.data)
        })
    }

    let handleEdit = () => {
        let editedBeneficiary = {name: beneficiaryName}
        Axios.put('http://localhost:8000/beneficiaries/' + props.beneficiary._id, editedBeneficiary)
        .then (res => {
            props.editBeneficiary(res.data)
        })
    }
     let changeName = (e) => {
        setBeneficiaryName(e.target.value)
        
     }

    return (
        <>
        
        <input
        value={beneficiaryName}
        onChange={changeName} />

        <div>
            {props.beneficiary.name}
            {props.beneficiary.address}
            {props.beneficiary.contactNum}
            {props.beneficiary.description}
            {props.beneficiary.website}
            {props.beneficiary.photo}
        </div>
        
        <button onClick={handleEdit}>EDIT</button>

        <button onClick={handleDel}>x</button>

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