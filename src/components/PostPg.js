// COMPONENTS
import PostList from "./PostList";

// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState, useEffect } from 'react'

const PostPg = (props) => {

    let [name, setName] = useState('')

    let addPostName = (e) => {
        setName(e.target.value)
    }

    let handleAddPost = (e) => {
        Axios.post('http://localhost:8000/posts/', {name})
        .then (res => {
            props.addPost(res.data)
        })
    }

    useEffect (() => {
        Axios.get('http://localhost:8000/posts/')
            .then(res => {
                console.log(res.data)
                props.setPost(res.data);
        })
    }, [])

    return (
        <>

        <div>POST PAGE</div>

        <form>
            <input 
            value={name}
            onChange={addPostName}
            placeholder="Enter Name"
            />
        </form>

        <button
        onClick={handleAddPost}
        >ADD</button>

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

        addPost: (post) => dispatch ({ type:'ADD_POST', payload: post}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPg);