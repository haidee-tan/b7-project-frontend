// COMPONENTS
import PostList from "./PostList";
import PostAddForm from "./PostAddForm";
import DonationForm from "./DonationForm";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState, useEffect } from 'react';

// ICON
import Plus from "../assets/imgs/buttons/plus.png";

const PostPg = ({axiosPort, setPost, posts, currUser}) => {
    let [modalDisp, setModalDisp] = useState(false);
    const [donationData, setDonationData] = useState({});
    let [addFormDisp, setAddFormDisp] = useState(false);

    useEffect (() => {
        Axios.get(axiosPort + 'posts/')
        .then(res => {
            setPost(res.data);
        })
    }, [axiosPort, setPost, posts])

    return (
        <div className="post-page page">
            <div className="sticky">
                {
                    !addFormDisp && currUser.role === "partner" ?
                    <button onClick={() => setAddFormDisp(!addFormDisp)} className="show-btn">
                        <img src={Plus} alt="plus"/>
                    </button>
                    : null
                }
                <h2>Posts</h2>
            </div>
            {currUser.role === "partner" && addFormDisp ? <PostAddForm setAddFormDisp={setAddFormDisp}/> : null}
            <div className="posts">
                {posts.map(post =>
                    <PostList
                        post = {post}
                        modalDisp = {modalDisp}
                        setModalDisp = {setModalDisp}
                        setDonationData = {setDonationData}
                        key = {post._id + post.name}
                    />
                )}        
            </div>
            {
                modalDisp ? 
                <DonationForm
                    donationData = {donationData}
                    setModalDisp = {setModalDisp}
                />
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        posts: state.postsSlice.posts,
        currUser: state.loginSlice.currUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPost: (post) => dispatch({
            type: 'SET_POST',
            payload: post
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPg);