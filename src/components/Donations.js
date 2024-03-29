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
        <div className="page">
            <div className="sticky">
                <h2>Donations</h2>
            </div>
            <div className="donations-table">
                <div className="donation-row header">
                    <div>Date</div>
                    <div>Image</div>
                    <div>Item Name</div>
                    <div>Beneficiary</div>
                    <div>Qty</div>
                    <div>Amt</div>
                    <div></div>
                </div>
                {
                    donations.length === 0 ?
                    <div className="none-msg">None. Why not start rolling the Kaserolla? :)</div>
                    :
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