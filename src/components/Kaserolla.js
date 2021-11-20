import {Route} from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import { useEffect } from 'react';

// COMPONENTS
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import BeneficiaryPg from "./BeneficiaryPg";
import PostPg from './PostPg';
import SignUp from './SignUp';
import LogIn from "./Login";
import Donations from "./Donations";
import Banner from "./Banner";

// CSS
import "../assets/css/overall.css"
import "../assets/css/home.css"
import "../assets/css/posts.css"
import "../assets/css/footer.css"
import "../assets/css/donations.css"
import "../assets/css/banner.css"
import "../assets/css/beneficiary.css"
import "../assets/css/login.css"
import "../assets/css/nav.css"
import "../assets/css/signup.css"

const Kaserolla = ({axiosPort, setBeneficiary, beneficiaries}) => {
    useEffect (() => {
        Axios.get(axiosPort + 'beneficiaries/')
            .then(res => {
                setBeneficiary(res.data);
        })
    }, [axiosPort, setBeneficiary])
    return ( 
     <div className="main-body">
        <div className="banner">
            <Banner />
        </div>
        <Nav />
        <div className="mainContent">
            <Route path="/" component={Home} exact/>
            <Route path="/beneficiaries" component={BeneficiaryPg} />
            <Route path="/posts" component={PostPg} />
            <Route path="/donations" component={Donations} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Kaserolla);