// 
import { connect } from "react-redux";

const BeneficiaryList = (props) => {

    // let handleDel = () => {
    //     Axios.delete(props.axiosPort + 'beneficiaries/delete/' + props.beneficiary._id, {headers: {authorization: props.currUser.access}})
    //     .then(res => props.delBeneficiary(res.data))
    // }

    let beneficiary = props.beneficiary

    return (
        <div className="beneListContainer">
            <div className="beneListBox">

                <div className="beneName">
                    <h2>{props.beneficiary.name}</h2>
                </div>

                <div className="benePhoto">
                    <div className="image">
                        <img className="beneImg" src={props.axiosPort + props.beneficiary.photo} alt={props.beneficiary.name}/>
                    </div>

                    <div className="details">
                        {props.beneficiary.description}
                    </div>
                </div>


                <div className="beneContact">

                    <strong>
                        Address :           
                    </strong>
                    <div>{props.beneficiary.address}</div>

                    <strong>
                        Contact # :
                    </strong>
                    <div>{props.beneficiary.contactNum}</div>

                    <div className="beneWebsite">{props.beneficiary.website}</div>
                    
                    <div>
                        {
                        props.currUser.role === "admin" ?
                        <div className="editBtnBox">
                            <button 
                                className="beneEditBtn"
                                onClick={(e) => props.handleEditBtn(e, beneficiary)}
                                >Edit
                            </button>
                        </div>
                        : null
                        }
                    </div>

                </div>
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
        delBeneficiary: (beneficiary) => dispatch ({
            type: 'DEL_BENEFICIARY',
            payload: beneficiary
        }),
        editBeneficiary: (beneficiary) => dispatch ({
            type: 'EDIT_BENEFICIARY',
            payload: beneficiary
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryList);