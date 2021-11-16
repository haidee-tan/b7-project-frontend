// 
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

    let changePostName = (e) => {
        setEditPostName(e.target.value)
        }
    let changePostDescription = (e) => {
        setEditPostDescription(e.target.value)
        }
    let changePostAvailability = (e) => {
        setEditPostAvailability(e.target.value)
        }
    let changePostPrice = (e) => {
        setEditPostPrice(e.target.value)
        }
    let changePostQuantity = (e) => {
        setEditPostQuantity(e.target.value)
        }
    let changePostPhoto = (e) => {
        setEditPostPhoto(e.target.value)
        }

    let handleEditPost = () => {
        let editedPost = {
            name: editPostName,
            description: editPostDescription,
            availability: editPostAvailability,
            price: editPostPrice,
            quantity: editPostQuantity,
            photo: editPostPhoto,
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

            <div>
                {props.post.description}

                <input
                value={editPostDescription}
                onChange={changePostDescription} />
            </div>

            <div>
                {props.post.availability}

                <input
                value={editPostAvailability}
                onChange={changePostAvailability} />
            </div>

            <div>
                {props.post.price}

                <input
                value={editPostPrice}
                onChange={changePostPrice} />
            </div>

            <div>
                {props.post.quantity}

                <input
                value={editPostQuantity}
                onChange={changePostQuantity} />
            </div>

            <div>
                {props.post.photo}

                <input
                value={editPostPhoto}
                onChange={changePostPhoto} />
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