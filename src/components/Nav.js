import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Nav = ({currUser, logoutUser}) => {
    return(
        <div className="navBox">
            <div>
                <Link to="/"><button className="navBtn">Home</button></Link>
                <Link to="/beneficiaries"><button className="navBtn">Beneficiaries</button></Link>
                {
                    currUser.role === null || currUser.role === "" ?
                    null
                    :
                    <>
                        <Link to="/posts"><button className="navBtn">Posts</button></Link>
                        <Link to="/donations"><button className="navBtn">Donations</button></Link>
                    </>
                }
            </div>
            <div className="logoutBox">
            {
                currUser.access === "" ?
                <>
                    <Link to="/signup"><button className="navBtn">Sign Up</button></Link>
                    <Link to="/login"><button className="navBtn">Login</button></Link>
                </>
                :
                <>
                        <div>
                            <p className="spanName">
                                Hello, {currUser.firstName}!
                            </p>
                        </div>
                        <div>
                            <button 
                                className="navBtn logout"
                                onClick={logoutUser}
                            >Logout</button>
                        </div>
                </>
            }
            </div>
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