import {Route} from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import { useEffect } from 'react';
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import BeneficiaryPg from "./BeneficiaryPg";
import PostPg from './PostPg';
import SignUp from './SignUp';
<<<<<<< HEAD
import Donations from "./Donations";
=======
import LogIn from "./Login";
>>>>>>> create-log-in-branch

import "../assets/css/home.css"
import "../assets/css/posts.css"
import "../assets/css/footer.css"
import "../assets/css/donations.css"

const Kaserolla = ({axiosPort, setBeneficiary, beneficiaries}) => {
    useEffect (() => {
        Axios.get(axiosPort + 'beneficiaries/')
            .then(res => {
                setBeneficiary(res.data);
        })
    }, [axiosPort, setBeneficiary])

    return ( 
        <div>
            <Nav />
            <Route path="/" component={Home} exact/>

            <Route path="/beneficiaries" component={BeneficiaryPg} />

            <Route path="/posts" component={PostPg} />
<<<<<<< HEAD
            <Route path="/donations" component={Donations} />
=======

            <Route path="/donations" component="" />

            <Route path="/deliveries" component="" />

>>>>>>> create-log-in-branch
            <Route path="/usermgt" component="" />

            <Route path="/signup" component={SignUp} />
            
            <Route path="/login" component={LogIn} />
            <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Kaserolla);