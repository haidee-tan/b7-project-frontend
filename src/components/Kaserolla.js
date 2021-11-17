import { connect } from "react-redux";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import BeneficiaryPg from "./BeneficiaryPg";
import PostPg from './PostPg';
import SignUp from './SignUp';

import "../assets/css/home.css"
import "../assets/css/footer.css"

const Kaserolla = ({activePage}) => {
    return ( 
        <div>
            <Nav />
            {activePage === "home" ? <Home /> : null}
            {activePage === "beneficiaries" ? <BeneficiaryPg /> : null}
            {activePage === "posts" ? <PostPg /> : null}
            {/* {activePage === "donations" ? < /> : null} */}
            {/* {activePage === "deliveries" ? < /> : null} */}
            {/* {activePage === "userMgt" ? <Home /> : null} */}
            {activePage === "signup" ? <SignUp /> : null}
            {/* {activePage === "login" ? <Login /> : null} */}
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        activePage: state.navSlice.activePage
    }
}

export default connect(mapStateToProps)(Kaserolla);