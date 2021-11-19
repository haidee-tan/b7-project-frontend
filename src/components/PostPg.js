// COMPONENTS
import PostList from "./PostList";
import PostAddForm from "./PostAddForm";
import DonationForm from "./DonationForm";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState, useEffect } from 'react';

const PostPg = ({axiosPort, setPost, posts}) => {
    let [modalDisp, setModalDisp] = useState(false);
    const [donationData, setDonationData] = useState({});

    useEffect (() => {
        Axios.get(axiosPort + 'posts/')
        .then(res => {
            setPost(res.data);
        })
    }, [axiosPort, setPost])

    return (
        <div>
            <div>
                <PostAddForm />
            </div>
            <div className="posts">
                {posts.map(post =>
                    <PostList
                        post = {post}
                        key = {post._id}
                        modalDisp = {modalDisp}
                        setModalDisp = {setModalDisp}
                        setDonationData = {setDonationData}
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