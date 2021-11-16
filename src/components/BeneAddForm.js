// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState } from 'react'



const BeneAddForm = (props) => {

    let [name, setName] = useState('')
    let [address, setAddress] = useState('')
    let [contactNum, setContactNum] = useState('')
    let [description, setDescription] = useState('')
    let [website, setWebsite] = useState('')
    let [photo, setPhoto] = useState('')
    let [active, setActive] = useState(true)


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
        Axios.post('http://localhost:8000/beneficiaries/', 
            {name, 
            address, 
            contactNum, 
            description, 
            website, 
            photo})
        .then (res => {
            props.addBeneficiary(res.data)
        })
    }
    
    let hideShowForm = () => {
        let beneForm = document.getElementsByClassName('beneForm');
        if(beneForm.style.display === "block") {
            beneForm.style.display = "none"
        } else {
            beneForm.style.display = "block"
        }
    }
    
    return (
        <>

            {/* <button
            className="beneAddBtn"
            onClick={hideShowForm}>
                +Beneficiary
            </button> */}
            
            <div className="beneContainer">
                <div className="beneBox">
                    <form className="beneForm">

                        Name :<input 
                        className="addBeneName inputBene"
                        type="text"
                        value={name}
                        onChange={addName}
                        />

                        Address :<input 
                        className="addBeneAddress inputBene"
                        type="text"
                        value={address}
                        onChange={addAddress}
                        />

                        Contact Info :<input
                        className="addBeneContact inputBene"
                        type="text"
                        value={contactNum}
                        onChange={addContactNum}
                        />

                        Details :<input
                        className="addBeneDesc inputBene"
                        type="text"
                        value={description}
                        onChange={addDescription}
                        />

                        Website :<input 
                        className="addBeneWebsite inputBene"
                        type="text"
                        value={website}
                        onChange={addWebsite}
                        />

                        Images :<input
                        className="addBenePhoto inputBene"
                        type="text"
                        value={photo}
                        onChange={addPhoto}
                        />

                        <button
                        className="beneAddBtn"
                        onClick={handleAdd}>
                            +Beneficiary
                        </button>
                    </form>
                </div>
            </div>
        </>
        )
    }
    
    
    const mapDispatchToProps = (dispatch) => {
        return { 
            addBeneficiary: (beneficiary) => dispatch ({ type:'ADD_BENEFICIARY', payload: beneficiary}),
        }
}

export default connect(null, mapDispatchToProps)(BeneAddForm);