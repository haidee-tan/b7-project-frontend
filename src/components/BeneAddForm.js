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

    let handleAdd = (e) => {
        Axios.post(props.axiosPort + 'beneficiaries/', 
            {name, 
            address, 
            contactNum, 
            description, 
            website, 
            photo})
        .then(res => {
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
        <div>
            {/* <button
            className="beneAddBtn"
            onClick={hideShowForm}>
                +Beneficiary
            </button> */}
            <div className="beneContainer">
                <div className="beneBox">
                    <form className="beneForm">
                        Name:
                        <input 
                            className="addBeneName inputBene"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        Address:
                        <input 
                            className="addBeneAddress inputBene"
                            type="text"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        Contact Info:
                        <input
                            className="addBeneContact inputBene"
                            type="text"
                            value={contactNum}
                            onChange={e => setContactNum(e.target.value)}
                        />
                        Details:
                        <input
                            className="addBeneDesc inputBene"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        Website:
                        <input 
                            className="addBeneWebsite inputBene"
                            type="text"
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                        Images:
                        <input
                            className="addBenePhoto inputBene"
                            type="file"
                            value={photo}
                            onChange={e => setPhoto(e.target.value)}
                        />
                    </form>
                    <button
                        className="beneAddBtn"
                        onClick={handleAdd}
                    >+Beneficiary
                    </button>
                </div>
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
        addBeneficiary: (beneficiary) => dispatch ({
            type:'ADD_BENEFICIARY',
            payload: beneficiary
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneAddForm);