// COMPONENTS
import BeneficiaryList from "./BeneficiaryList";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState, useEffect } from 'react'



const BeneficiaryPg = (props) => {

    let [name, setName] = useState('')


    let addName = (e) => {
        setName(e.target.value)
    }

    let handleAdd = (e) => {
        Axios.post('http://localhost:8000/beneficiaries/', {name})
        .then (res => {
            props.addBeneficiary(res.data)
        })
    }
    let handleDel = () => {
        Axios.delete('http://localhost:8000/beneficiaries/' + props.beneficiary._id)
        .then(res => {
            props.delBeneficiary(res.data)
        })
    }

    useEffect (() => {
        Axios('http://localhost:8000/beneficiaries')
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
                </form>
                <button
                onClick={handleAdd}>ADD</button>
                <button>EDIT</button>
                <button
                onClick={handleDel}>x</button>
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

        delBeneficiary: (beneficiary) => dispatch ({type: 'DEL_BENEFICIARY', payload: beneficiary})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryPg);
// export default BeneficiaryPg;