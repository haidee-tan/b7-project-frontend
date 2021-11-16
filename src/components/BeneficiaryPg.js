// COMPONENTS
import BeneficiaryList from "./BeneficiaryList";
import BeneAddForm from './BeneAddForm';

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useEffect } from 'react'

const BeneficiaryPg = (props) => {
    useEffect (() => {
        Axios.get('http://localhost:8000/beneficiaries/')
            .then(res => {
                props.setBeneficiary(res.data);
        })
    }, [])
    return (
        <>
        <div>
            <BeneAddForm />
        </div>
        <div>
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
        setBeneficiary: (beneficiary) => dispatch({type: 'SET_BENEFICIARIES', payload: beneficiary})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryPg);