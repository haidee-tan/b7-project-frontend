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
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name)
        formData.append('description', description)
        formData.append('availability', availability)
        formData.append('price', price)
        formData.append('photo', photo)
        formData.append('quantity', quantity)
        formData.append('status', "active")
        Axios.post(props.axiosPort + "posts/", formData, {headers:{
            'content-type': 'multipart/form-data',
            authorization: props.currUser.access
        }})
        .then(res => {
            props.addPost(res.data);
            props.setAddFormDisp(false);
        })
        .catch((res) => console.log(res.data))
    }

    return (
        <div className="add-new-post modal">
            <h3>Create new post</h3>
            <p>Let's stuff the Kaserolla and roll these food to others!</p>
            <form className="post-add-form">
                <input 
                    type="text"
                    value = {name}
                    name = "name"
                    onChange = {e => setName(e.target.value)}
                    placeholder = "Food name"
                />
                <input 
                    type="text"
                    value = {description}
                    name = "description"
                    onChange = {e => setDescription(e.target.value)}
                    placeholder = "Description"
                />
                <div className = "food-avail">
                    <p>Please specify up to when the food is available.</p>
                    <input 
                        type="date"
                        value = {availability}
                        name = "availability"
                        onChange = {e => setAvailability(e.target.value)}
                        placeholder = "Availability"
                    />
                </div>
                <input 
                    type="number"
                    value = {price}
                    name = "price"
                    onChange = {e => setPrice(e.target.value)}
                    placeholder = "Price"
                />
                <input 
                    type="number"
                    value = {quantity}
                    name = "quantity"
                    onChange = {e => setQuantity(e.target.value)}
                    placeholder = "Quantity"
                />
                <input 
                    type="file"
                    name='photo'
                    onChange = {e => setPhoto(e.target.files[0])}
                    accept = "image/*"
                    placeholder = "Upload Photos"
                />
                <div className="btn-box">
                    <button type="button" onClick={handleAddPost}>Submit</button>
                    <button type="button" onClick={() => props.setAddFormDisp(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
        currUser: state.loginSlice.currUser
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