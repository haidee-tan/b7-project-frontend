// COMPONENTS
import PostList from "./PostList";
import PostAddForm from "./PostAddForm";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useEffect } from 'react'

const PostPg = (props) => {

useEffect (() => {
    Axios.get('http://localhost:8000/posts/')
        .then(res => {
            props.setPost(res.data);
    })
}, [])

    return (
        <>

        <div>
            <PostAddForm />
        </div>
        
         
        <div>
        {props.posts.map ( post =>
        <PostList 
            post={post}
        />
        )}        
        </div>



        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPost: (post) => dispatch({type: 'SET_POST', payload: post}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPg);