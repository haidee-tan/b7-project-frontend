import { connect } from "react-redux";
import Axios from "axios";
import { useEffect, Fragment, useState } from 'react';

// COMPONENTS
import BeneficiaryList from "./BeneficiaryList";
import BeneAddForm from './BeneAddForm';
import BeneficiaryEditForm from "./BeneficiaryEditForm";

const BeneficiaryPg = ({axiosPort, setBeneficiary, beneficiaries, currUser}) => {
    useEffect (() => {
        Axios.get(axiosPort + 'beneficiaries/')
            .then(res => {
                setBeneficiary(res.data);
        })
    }, [axiosPort, setBeneficiary, beneficiaries])

    let [editList, setEditList] = useState(null)

    let handleEditBtn = (e, list) => {
        e.preventDefault();
        setEditList(list._id)
    }

    return (
        <div className="page">
            <h2>Kaserolla Beneficiaries</h2>
            <div className="beneficiary1">
                {currUser.role === "admin" ? <BeneAddForm /> : null}
            </div>
            <div className="beneficiary2">
                {beneficiaries.map (beneficiary =>
                    <Fragment key={beneficiary._id}>
                        {
                            editList === beneficiary._id ? 
                            <BeneficiaryEditForm
                                beneficiary={beneficiary}
                                setEditList={setEditList}
                                key={beneficiary._id}
                            />
                            :
                            <BeneficiaryList 
                                beneficiary={beneficiary} 
                                handleEditBtn={handleEditBtn}
                                key={beneficiary.name}
                            />
                        }
                    </Fragment>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        currUser: state.loginSlice.currUser,
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