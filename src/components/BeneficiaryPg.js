// COMPONENTS
import BeneficiaryList from "./BeneficiaryList";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState, useEffect } from 'react'



const BeneficiaryPg = (props) => {

    let [name, setName] = useState('')
    let [address, setAddress] = useState('')
    let [contactNum, setContactNum] = useState('')
    let [description, setDescription] = useState('')
    let [website, setWebsite] = useState('')
    let [photo, setPhoto] = useState('')

    let addName = (e) => {
        setName(e.target.value)
    }
    let addAddress = (e) => {
        setAddress(e.target.value)
    }
    let addContactNum = (e) => {
        setContactNum(e.target.value)
    }
    let addDescription = (e) => {
        setDescription(e.target.value)
    }
    let addWebsite = (e) => {
        setWebsite(e.target.value)
    }
    let addPhoto = (e) => {
        setPhoto(e.target.value)
    }

    let handleAdd = (e) => {
        Axios.post('http://localhost:8000/beneficiaries/', {name})
        .then (res => {
            props.addBeneficiary(res.data)
        })
    }

    useEffect (() => {
        Axios.get('http://localhost:8000/beneficiaries/')
            .then(res => {
                console.log(res.data)
                props.setBeneficiary(res.data);
        })
    }, [])

    return (
        <>
            <div className="beneContainer">
                BENEFICIARY PAGE
            </div>
            <div>
                <form>
                    <input 
                    type="text"
                    value={name}
                    onChange={addName}
                    placeholder="Enter Name"
                    />
                    <input 
                    type="text"
                    value={address}
                    onChange={addAddress}
                    placeholder="Enter Address"
                    />
                    <input 
                    type="text"
                    value={contactNum}
                    onChange={addContactNum}
                    placeholder="Enter Contact Number"
                    />
                    <input 
                    type="text"
                    value={description}
                    onChange={addDescription}
                    placeholder="Enter Description"
                    />
                    <input 
                    type="text"
                    value={website}
                    onChange={addWebsite}
                    placeholder="Enter Website"
                    />
                    <input 
                    type="text"
                    value={photo}
                    onChange={addPhoto}
                    placeholder="Enter Photo"
                    />
                </form>

                <button
                onClick={handleAdd}>ADD</button>

            </div>
            <div>
                SELECTION: 
                {props.beneficiaries.map (beneficiary =>
                <BeneficiaryList 
                    beneficiary={beneficiary}
                />
                    
                    )}


            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        beneficiaries: state.beneficiaries,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setBeneficiary: (beneficiary) => dispatch({type: 'SET_BENEFICIARIES', payload: beneficiary}),

        addBeneficiary: (beneficiary) => dispatch ({ type:'ADD_BENEFICIARY', payload: beneficiary}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryPg);
// export default BeneficiaryPg;