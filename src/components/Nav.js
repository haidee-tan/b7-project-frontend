import {Link} from "react-router-dom";

const Nav = (props) => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/beneficiaries">Beneficiaries</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/donations">My Donations</Link>
            <Link to="/userMgt">User Mgt</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Nav;