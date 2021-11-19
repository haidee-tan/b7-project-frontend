import { useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import Donation from "./Donation";

const Donations = (props) => {

    let {axiosPort, donations, setDonations, currUser} = props
    
    useEffect(() => {
        let routeAccess;
        currUser.role === "admin" ? routeAccess = "donations/all" : routeAccess = "donations/"
        Axios.get(axiosPort + routeAccess, {headers: {authorization: currUser.access}})
        .then(res => {
            setDonations(res.data)
        })
    }, [axiosPort, setDonations, currUser])

    return (
        <div>
            <h2>Donations :)</h2>
            <div>
                <div className="donation-row">
                    <div>Date</div>
                    <div>Image</div>
                    <div>Post Name</div>
                    <div>Beneficiary</div>
                    <div>Donation Qty</div>
                    <div>Total Donation Amt</div>
                    <div>Buttons</div>
                </div>
                {
                    donations.map(donation =>
                        <Donation donation={donation} key={donation._id}/>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        donations: state.donationsSlice.donations,
        currUser: state.loginSlice.currUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDonations: (donations) => dispatch ({
            type: "SET_DONATIONS",
            payload: donations
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donations);