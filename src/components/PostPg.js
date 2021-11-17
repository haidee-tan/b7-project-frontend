// COMPONENTS
import PostList from "./PostList";
import PostAddForm from "./PostAddForm";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useEffect } from 'react'

const PostPg = ({axiosPort, setPost, posts}) => {

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
            <div>
                {posts.map(post =>
                    <PostList post={post} key={post.name}/>
                )}        
            </div>
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