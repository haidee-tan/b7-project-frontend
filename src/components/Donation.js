import { connect } from "react-redux";
import Axios from "axios";
import Moment from "moment";

const Donation = (props) => {
    let {createdAt, quantity, fee, beneficiary, post} = props.donation;

    const handleDelete = () => {
        Axios.delete(props.axiosPort + "donations/delete/" + props.donation._id, {headers: {authorization: props.currUser.access}})
        .then(res => props.deleteDonation(res.data))
    }

    return (
        <div className="donation-row">
            <div>{Moment(createdAt).startOf("hour").fromNow()}</div>
            <div>
                <img src={props.axiosPort + post.photo} alt={post.name} />
            </div>
            <div>{post.name}</div>
            <div>{beneficiary.name}</div>
            <div>{quantity}</div>
            <div>{fee}</div>
            <div>
            {
                props.currUser.role === "admin" ?
                <button onClick={handleDelete}>Delete</button>
                : null
            }
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
        deleteDonation: (id) => dispatch({
            type: "DELETE_DONATION",
            payload: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donation);