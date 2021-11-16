// COMPONENTS
import Home from "./Home";
import Footer from "./Footer";
import BeneficiaryPg from "./BeneficiaryPg";
import PostPg from './PostPg';


const Kaserolla = (props) => {

    return ( 
        <>

        <div className="home">
            {/* <Home /> */}
        </div>

        <div className="footer">
            {/* <Footer /> */}
        </div>

        <div className="beneficiaryComp">
            {/* <BeneficiaryPg /> */}
        </div>
            
        <div className="postComp">
            <PostPg />
        </div>
        </>
    )
}

export default Kaserolla