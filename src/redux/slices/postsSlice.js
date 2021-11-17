const initialState = {
    posts: [],
}

const postsSlice = (state = initialState, action) => {
    switch(action.type) {
        case "SET_POST": {
            return {
                ...state,
                posts: action.payload
            }
        }
        case "ADD_POST": {
            let postCopy = [...state.posts, action.payload]
            return  {
                ...state,
                posts: postCopy
            }
        }
        case "EDIT_POST": {
            let postCopy = [...state.posts]
            let index = postCopy.findIndex( (post) => post._id === action.payload._id);
            if (index !== -1)
            postCopy[index] = action.payload
            return {
                ...state,
                posts: postCopy
            }
        }
        case "DEL_POST": {
            let postCopy = [...state.posts]
            let index = postCopy.findIndex( (post) => post._id === action.payload._id);
            if ( index !== -1 )
            postCopy.splice(index, 1)
            return  {
                ...state,
                posts: postCopy
            }
        }
        default: return state;
    }
}

export default postsSlice;