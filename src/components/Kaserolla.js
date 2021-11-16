import "../assets/css/home.css";
import "../assets/css/footer.css";

import Home from "./Home";
import Footer from "./Footer";
import SignUp from "./SignUp";

const Kaserolla = (props) => {

    return ( 
        <>
        <div>
            <h1> CONNECTED</h1>
            <Home />
            <SignUp />
            <Footer />
        </div>
            
        </>
    )
}

export default Kaserolla