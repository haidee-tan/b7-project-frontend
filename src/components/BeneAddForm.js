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
    // let [active, setActive] = useState(true)

    let handleAdd = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name)
        formData.append('address', address)
        formData.append('contactNum', contactNum)
        formData.append('description', description)
        formData.append('website', website)
        formData.append('photo', photo)

        Axios.post(props.axiosPort + 'beneficiaries/', formData, {headers: {
            'content-type': 'multipart/form-data',
            authorization: props.currUser.access
        }})
        .then(res => {
            props.addBeneficiary(res.data)
        })
    }
    
    return (
        <div className="beneContainer addform">
            <div className="beneBox">
                <form className="beneForm">
                    <h3>Add a Beneficiary</h3>
                    <div>
                        <div>Name:</div>
                        <input 
                            className="addBeneName inputBene"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>Address:</div>
                        <input 
                            className="addBeneAddress inputBene"
                            type="text"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>Contact Info:</div>
                        <input
                            className="addBeneContact inputBene"
                            type="text"
                            value={contactNum}
                            onChange={e => setContactNum(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>Details:</div>
                        <input
                            className="addBeneDesc inputBene"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>Website:</div>
                        <input 
                            className="addBeneWebsite inputBene"
                            type="text"
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>Image:</div>
                        <input
                            className="addBenePhoto inputBene"
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={e => setPhoto(e.target.files[0])}
                        />
                    </div>
                    <div className="btn-box">
                        <button
                            className="custom-btn"
                            onClick={handleAdd}
                        >+Beneficiary
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        currUser: state.loginSlice.currUser
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