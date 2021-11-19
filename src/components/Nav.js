import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Nav = ({currUser, logoutUser}) => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/beneficiaries">Beneficiaries</Link>
            {
                currUser.role === null || currUser.role === "" ?
                null
                :
                <>
                    <Link to="/posts">Posts</Link>
                    <Link to="/donations">Donations</Link>
                </>
            }
            {
                // currUser.role === "admin" ?
                // <Link to="/userMgt">User Mgt</Link>
                // : null
            }
            {
                currUser.access === "" ?
                <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </>
                :
                <>
                    <span>Hello, {currUser.firstName}!</span>
                    <button onClick={logoutUser}>Logout</button>
                </>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currUser: state.loginSlice.currUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch({
            type: "LOGOUT_USER"
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);