// 
import { connect } from "react-redux";
import { useState} from "react"
import Axios from "axios";

const PostList = (props) => {

    let [editPostName, setEditPostName] = useState(props.post.name)

    let changePostName = (e) => {
        setEditPostName(e.target.value)
        }

    let handleEditPost = () => {
        let editedPost = {
            name: editPostName, 
        }
        Axios.put('http://localhost:8000/posts/' + props.post._id, editedPost)
        .then (res => {
            props.editPost(res.data)
        })
    }

    let handleDelPost = () => {
        Axios.delete('http://localhost:8000/posts/' + props.post._id)
        .then(res => {
            props.delPost(res.data)
        })
    }

    return (
        <>

        <div>
            <div>
                {props.post.name}

                <input
                value={editPostName}
                onChange={changePostName} />

            </div>

            <button
            onClick={handleEditPost}>
                EDIT
            </button>

            <button 
            onClick={handleDelPost}>
                x
            </button>

        </div>

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        delPost: (post) => dispatch ({type: 'DEL_POST', payload: post}),

        editPost: (post) => dispatch ({type: 'EDIT_POST', payload: post})

    }
}

export default connect(null, mapDispatchToProps)(PostList);