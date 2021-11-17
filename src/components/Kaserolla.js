import {Route} from "react-router-dom";
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
            <Route path="/" component={Home} exact/>
            <Route path="/beneficiaries" component={BeneficiaryPg} />
            <Route path="/posts" component={PostPg} />
            <Route path="/donations" component="" />
            <Route path="/deliveries" component="" />
            <Route path="/usermgt" component="" />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component="" />
            <Footer />
        </div>
    )
}

export default Kaserolla;