import { connect } from "react-redux";
import { useState} from "react"
import Axios from "axios";

const PostList = (props) => {

    let [editPostName, setEditPostName] = useState(props.post.name)
    let [editPostDescription, setEditPostDescription] = useState(props.post.description)
    let [editPostAvailability, setEditPostAvailability] = useState(props.post.availability)
    let [editPostPrice, setEditPostPrice] = useState(props.post.price)
    let [editPostQuantity, setEditPostQuantity] = useState(props.post.quantity)
    let [editPostPhoto, setEditPostPhoto] = useState(props.post.photo)

    let handleEditPost = () => {
        let editedPost = {
            name: editPostName,
            description: editPostDescription,
            availability: editPostAvailability,
            price: editPostPrice,
            quantity: editPostQuantity,
            photo: editPostPhoto,
        }
        Axios.put(props.axiosPort + "posts/" + props.post._id, editedPost)
        .then (res => {
            props.editPost(res.data)
        })
    }

    let handleDelPost = () => {
        Axios.delete(props.axiosPort + "posts/" + props.post._id)
        .then(res => {
            props.delPost(res.data)
        })
    }

    return (
        <div>
            <div>
                <div>{props.post.name}</div>
                <input type="text" value={editPostName} onChange={e => setEditPostName(e.target.value)} />
            </div>
            <div>
                <div>{props.post.description}</div>
                <input type="text" value={editPostDescription} onChange={e => setEditPostDescription(e.target.value)} />
            </div>
            <div>
                <div>{props.post.availability}</div>
                <input type="text" value={editPostAvailability} onChange={e => setEditPostAvailability(e.target.value)} />
            </div>
            <div>
                <div>{props.post.price}</div>
                <input type="number" value={editPostPrice} onChange={e => setEditPostPrice(e.target.value)} />
            </div>
            <div>
                <div>{props.post.quantity}</div>
                <input type="number" value={editPostQuantity} onChange={e => setEditPostQuantity(e.target.value)} />
            </div>
            <div>
                <div>{props.post.photo}</div>
                
                <input type="file" onChange={e => setEditPostPhoto(e.target.value)} />
            </div>
            <div>
                <button onClick={handleEditPost}>Edit</button>
                <button onClick={handleDelPost}>Delete</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delPost: (post) => dispatch ({
            type: 'DEL_POST',
            payload: post
        }),
        editPost: (post) => dispatch ({
            type: 'EDIT_POST',
            payload: post
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);