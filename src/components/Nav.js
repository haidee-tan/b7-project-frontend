import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Nav = ({currUser, logoutUser}) => {
    return(
        <div className="navBox">
            <div className="homeNav">
                <Link to="/">
                    <button className="navBtn">
                    Home
                    </button>
                </Link>
            </div>

            <div className="beneNav">
                <Link to="/beneficiaries">
                    <button className="navBtn">
                        Beneficiaries
                    </button>
                </Link>
            </div>
            {
                currUser.role === null || currUser.role === "" ?
                null
                :
                <>
                <div className="postNav">
                    <Link to="/posts">
                        <button className="navBtn">
                            Posts
                        </button>
                    </Link>
                </div>

                <div className="donationNav">
                    <Link to="/donations">
                        <button className="navBtn">
                            Donations
                        </button>
                    </Link>
                </div>
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
                <div className="signupNav">
                    <Link to="/signup">
                        <button className="navBtn">
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className="loginNav">
                    <Link to="/login">
                        <button className="navBtn">
                            Login
                        </button>
                    </Link>
                </div>
                </>
                :
                <>
                <div className="logoutBox">
                    <span className="spanName">
                        <h2>Hello,</h2> 
                        <h2 className="name">
                        {currUser.firstName}! 
                        </h2>
                    </span>
                    <div className="logoutNav">
                        <button 
                        className="navBtn logout"
                        onClick={logoutUser}>
                            Logout
                        </button>
                    </div>
                </div>
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