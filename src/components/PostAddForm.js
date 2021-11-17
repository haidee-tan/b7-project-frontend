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

    let handleAddPost = (e) => {
        let newPost = {
            name, 
            description, 
            availability, 
            price, 
            quantity, 
            photo
        }
        Axios.post(props.axiosPort + "posts/", newPost)
        .then (res => {
            props.addPost(res.data)
        })
    }

    return (
        <div>
            <div>Create new post</div>
            <form>
                <input 
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                    placeholder = "Name"
                />
                <input 
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                    placeholder = "Details"
                />
                <input 
                    value = {availability}
                    onChange = {e => setAvailability(e.target.value)}
                    placeholder = "Availability"
                />
                <input 
                    value = {price}
                    onChange = {e => setPrice(e.target.value)}
                    placeholder = "Price"
                />
                <input 
                    value = {quantity}
                    onChange = {e => setQuantity(e.target.value)}
                    placeholder = "Quantity"
                />
                <input 
                    value = {photo}
                    onChange = {e => setPhoto(e.target.value)}
                    placeholder = "Upload Photos"
                />
            </form>
            <button onClick={handleAddPost}>Submit</button>
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
        addPost: (post) => dispatch ({
            type:'ADD_POST',
            payload: post
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAddForm);