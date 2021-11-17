import { connect } from "react-redux";

const Nav = ({setActivePage}) => {
    return(
        <div>
            <button onClick={() => setActivePage("home")}>Home</button>
            <button onClick={() => setActivePage("beneficiaries")}>Beneficiaries</button>
            <button onClick={() => setActivePage("posts")}>Posts</button>
            <button onClick={() => setActivePage("donations")}>My Donations</button>
            <button onClick={() => setActivePage("deliveries")}>Delivery Tasks</button>
            <button onClick={() => setActivePage("userMgt")}>User Mgt</button>
            <button onClick={() => setActivePage("signup")}>Sign Up</button>
            <button onClick={() => setActivePage("login")}>Login</button>
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