// 
import { connect } from "react-redux";
import Axios from "axios";
import { useState } from 'react'

const PostAddForm = (props) => {

    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [availability, setAvailability] = useState('')
    let [price, setPrice] = useState('')
    let [photo, setPhoto] = useState('')
    let [quantity, setQuantity] = useState('')

    let addPostName = (e) => {
        setName(e.target.value)
    }
    let addPostDescription = (e) => {
        setDescription(e.target.value)
    }
    let addPostAvailability = (e) => {
        setAvailability(e.target.value)
    }
    let addPostPrice = (e) => {
        setPrice(e.target.value)
    }
    let addPostPhoto = (e) => {
        setPhoto(e.target.value)
    }
    let addPostQuantity = (e) => {
        setQuantity(e.target.value)
    }

    let handleAddPost = (e) => {
        Axios.post('http://localhost:8000/posts/', 
            {name, 
            description, 
            availability, 
            price, 
            quantity, 
            photo})
        .then (res => {
            props.addPost(res.data)
        })
    }

    return (
        <>

        <div>POST PAGE</div>

        <form>
            <input 
            value={name}
            onChange={addPostName}
            placeholder="Name"
            />

            <input 
            value={description}
            onChange={addPostDescription}
            placeholder="Details"
            />

            <input 
            value={availability}
            onChange={addPostAvailability}
            placeholder="Availability"
            />

            <input 
            value={price}
            onChange={addPostPrice}
            placeholder="Price"
            />

            <input 
            value={quantity}
            onChange={addPostQuantity}
            placeholder="Quantity"
            />

            <input 
            value={photo}
            onChange={addPostPhoto}
            placeholder="Upload Photos"
            />

        </form>

        <button
        onClick={handleAddPost}
        >ADD</button>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch ({ type:'ADD_POST', payload: post}),
    }
}

export default connect(null, mapDispatchToProps)(PostAddForm);