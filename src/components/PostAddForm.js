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
        Axios.post(props.axiosPort + "posts/", formData, {headers:{'content-type': 'multipart/form-data'}} )
        .then (res => {
            props.addPost(res.data)
        })
    }

    return (
        <>
        <div>
            {/* UPLOADING IMAGE IS NOT SAVED IN THE PUBLIC FOLDER IN BE */}
            {/* ALL SUBMITTED DATA IS REFLECTED IN BE*/}
            {/* SET TO MULTIPLE UPLOADS */}
            <div>Create new post</div>
            <form>
                <input 
                    type="text"
                    value = {name}
                    name = "name"
                    onChange = {e => setName(e.target.value)}
                    placeholder = "Name"
                />
                <input 
                    type="text"
                    value = {description}
                    name = "description"
                    onChange = {e => setDescription(e.target.value)}
                    placeholder = "Details"
                />
                <input 
                    type="date"
                    value = {availability}
                    name = "availability"
                    onChange = {e => setAvailability(e.target.value)}
                    placeholder = "Availability"
                />
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

            <button type="button" onClick={handleAddPost}>Submit</button>
            </form>
        </div>
        </>
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