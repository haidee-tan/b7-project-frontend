import { connect } from "react-redux";
import {Link} from "react-router-dom";

const Nav = ({setActivePage}) => {
    return(
        <div>

            <Link to="/">Home</Link>
            <Link to="/beneficiaries">Beneficiaries</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/donations">Donations</Link>
            <Link to="/deliveries">Deliveries</Link>
            <Link to="/usermgt">User Mgt</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>

            {/* <button onClick={() => setActivePage("home")}>Home</button>
            <button onClick={() => setActivePage("beneficiaries")}>Beneficiaries</button>
            <button onClick={() => setActivePage("posts")}>Posts</button>
            <button onClick={() => setActivePage("donations")}>My Donations</button>
            <button onClick={() => setActivePage("deliveries")}>Delivery Tasks</button>
            <button onClick={() => setActivePage("userMgt")}>User Mgt</button>
            <button onClick={() => setActivePage("signup")}>Sign Up</button>
            <button onClick={() => setActivePage("login")}>Login</button> */}
        </div>
    )
}

const mapDispatchToState = (dispatch) => {
    return{
        setActivePage: (page) => dispatch({
            type: "SET_ACTIVE_PAGE",
            payload: page
        })
    }
}

export default connect(null, mapDispatchToState)(Nav);