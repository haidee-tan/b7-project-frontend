import { connect } from "react-redux";
import Axios from "axios";
import { useEffect, Fragment, useState } from 'react';

// COMPONENTS
import BeneficiaryList from "./BeneficiaryList";
import BeneAddForm from './BeneAddForm';
import BeneficiaryEditForm from "./BeneficiaryEditForm";

const BeneficiaryPg = ({axiosPort, setBeneficiary, beneficiaries}) => {
    useEffect (() => {
        Axios.get(axiosPort + 'beneficiaries/')
            .then(res => {
                setBeneficiary(res.data);
        })
    }, [axiosPort, setBeneficiary])

    let [editList, setEditList] = useState(null)

    let handleEditBtn = (e, list) => {
        e.preventDefault();
        setEditList(list._id)
    }

    return (
        <div>
            <div>
                <BeneAddForm />
            </div>
            <div>

                {beneficiaries.map (beneficiary =>
            <Fragment>
                {editList === beneficiary._id ? 
                (
                <BeneficiaryEditForm
                beneficiary={beneficiary}/>)
                :
                (
                <BeneficiaryList 
                beneficiary={beneficiary} 
                handleEditBtn={handleEditBtn}
                key={beneficiary._id}/>
                )}
            </Fragment>
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