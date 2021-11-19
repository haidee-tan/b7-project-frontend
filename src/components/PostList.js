import { connect } from "react-redux";
import { useEffect, useState} from "react";
import Axios from "axios";
import Moment from "moment";

const PostList = (props) => {

    let {name, description, availability, price, quantity, photo, status} = props.post;

    let [editPostName, setEditPostName] = useState(name)
    let [editPostDescription, setEditPostDescription] = useState(description)
    let [editPostAvailability, setEditPostAvailability] = useState(availability)
    let [editPostPrice, setEditPostPrice] = useState(price)
    let [editPostQuantity, setEditPostQuantity] = useState(quantity)
    // let [editPostPhoto, setEditPostPhoto] = useState(photo)
    let [editStatus, setEditStatus] = useState(status)
    let [enableEdit, setEnableEdit] = useState(false);

    useEffect(() => {
        setEditPostName(name);
        setEditPostDescription(description);
        setEditPostAvailability(availability);
        setEditPostPrice(price);
        setEditPostQuantity(quantity);
        // setEditPostPhoto(photo);
    }, [name, description, availability, price, quantity, photo])

    let handleSavePost = (e) => {

        Axios.put(props.axiosPort + "posts/" + props.post._id, {status: editStatus}, {headers:{authorization: props.currUser.access}})
        .then (res => {
            props.editPost(res.data);
            setEnableEdit(false);
        })

        // e.preventDefault();
        // let formEditData = new FormData();
        // formEditData.append('name', editPostName)
        // formEditData.append('description', editPostDescription)
        // formEditData.append('availability', editPostAvailability)
        // formEditData.append('price', editPostPrice)
        // formEditData.append('photo', photo)
        // formEditData.append('quantity', editPostQuantity)
        // formEditData.append('status', "active")

        // Axios.put(props.axiosPort + "posts/" + props.post._id, formEditData, {headers:{'content-type': 'multipart/form-data'}})
        // .then (res => {
        //     props.editPost(res.data);
        //     setEnableEdit(false);
        // })
    }
    let handleCancelBtn = () => {
        setEditStatus(status);
        setEnableEdit(false);
    }
    let handleDelPost = () => {
        Axios.delete(props.axiosPort + "posts/" + props.post._id, {headers: {authorization: props.currUser.access}})
        .then(res => {
            props.delPost(res.data)
        })
    }
    let handleDonateBtn = () => {
        props.setModalDisp(true);
        props.setDonationData({
            _id: props.post._id,
            name: editPostName,
            description: editPostDescription,
            availability: editPostAvailability,
            price: editPostPrice,
            quantity: editPostQuantity,
            photo: props.axiosPort + props.post.photo
        });
    }

    return (
        <div className="post">
            <div className="post-img-div">
                <div className="post-img">
                    <img 
                        src={props.axiosPort + props.post.photo}
                        alt="samplePicture"
                    />
                </div>
                {/* {
                    enableEdit ?
                    <input 
                        type="file"  
                        name='photo' 
                        onChange={e => setEditPostPhoto(e.target.files[0])}
                        disabled={true}
                        accept = "image/*"
                    />
                    : null
                } */}
            </div>
            <div>Name: 
                <input 
                    type="text" 
                    value={editPostName} 
                    onChange={e => setEditPostName(e.target.value)}
                    disabled={true} 
                />
            </div>

            <div className="description">Description: 
                <input 
                    type="text" 
                    value={editPostDescription} 
                    onChange={e => setEditPostDescription(e.target.value)}
                    disabled={true} 
                />
            </div>

            <div>Available until: 
                <input 
                    type="text" 
                    value={Moment(editPostAvailability).format("MMM-DD-YY")} 
                    onChange={e => setEditPostAvailability(e.target.value)}
                    disabled={true} 
                />
            </div>

            <div>Price: 
                <input 
                    type="number" 
                    value={editPostPrice} 
                    onChange={e => setEditPostPrice(e.target.value)}
                    disabled={true} 
                />
            </div>

            <div>Quantity: 
                <input 
                    type="number" 
                    value={editPostQuantity} 
                    onChange={e => setEditPostQuantity(e.target.value)}
                    disabled={true} 
                />
            </div>
            {
                props.currUser.role === "admin" ?
                <>
                    <div>Status:
                        <select value={editStatus} onChange={e => setEditStatus(e.target.value)} disabled={!enableEdit}>
                            <option>active</option>
                            <option>inactive</option>
                        </select>
                    </div>
                    <div className="btn-box">
                        {
                            enableEdit ?
                            <>
                                <button onClick={handleSavePost}>Save</button>
                                <button onClick={handleCancelBtn}>Cancel</button>
                            </>
                            :
                            <>
                                <button onClick={() => setEnableEdit(true)}>Edit</button>
                                <button onClick={handleDelPost}>Delete</button>
                            </>
                        }
                    </div>
                </>
                : null
            }
            <div className="btn-box">
                {!props.modalDisp && (props.currUser.role === "sponsor" || props.currUser.role === "partner") ?
                <button onClick={handleDonateBtn}>Donate</button>
                : null}
            </div>
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