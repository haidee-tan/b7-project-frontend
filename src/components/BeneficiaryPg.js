import { connect } from "react-redux";
import Axios from "axios";
import { useEffect } from 'react'

// COMPONENTS
import BeneficiaryList from "./BeneficiaryList";
import BeneAddForm from './BeneAddForm';

const BeneficiaryPg = ({axiosPort, setBeneficiary, beneficiaries}) => {
    useEffect (() => {
        Axios.get(axiosPort + 'beneficiaries/')
            .then(res => {
                setBeneficiary(res.data);
        })
    }, [axiosPort, setBeneficiary])

    return (
        <div>
            <div>
                <BeneAddForm />
            </div>
            <div>
                {beneficiaries.map (beneficiary =>
                    <BeneficiaryList beneficiary={beneficiary} key={beneficiary.name}/>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        beneficiaries: state.beneficiariesSlice.beneficiaries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBeneficiary: (beneficiary) => dispatch({
            type: 'SET_BENEFICIARIES',
            payload: beneficiary
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryPg);