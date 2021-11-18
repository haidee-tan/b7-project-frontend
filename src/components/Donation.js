import { connect } from "react-redux";

const Donation = (props) => {
    let {createdAt, quantity, fee, beneficiary, post} = props.donation;

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
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort
    }
}

export default connect(mapStateToProps)(Donation);