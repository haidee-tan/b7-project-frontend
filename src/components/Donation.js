import { connect } from "react-redux";
import Axios from "axios";

const Donation = (props) => {
    let {createdAt, quantity, fee, beneficiary, post} = props.donation;

    const handleDelete = () => {
        Axios.delete(props.axiosPort + "donations/delete/" + props.donation._id, {headers: {authorization: props.currUser.access}})
        .then(res => props.deleteDonation(res.data))
    }
    const handleEdit = () => {
        
    }

    return (
        <div className="donation-row">
            <div>{createdAt}</div>
            <div>
                <img src={props.axiosPort + post.photo} alt={post.name} />
            </div>
            <div>{post.name}</div>
            <div>{beneficiary.name}</div>
            <div>{quantity}</div>
            <div>{fee}</div>
            {
                props.currUser.role === "admin" ?
                <div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                : null
            }
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
        deleteDonation: (id) => dispatch({
            type: "DELETE_DONATION",
            payload: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donation);