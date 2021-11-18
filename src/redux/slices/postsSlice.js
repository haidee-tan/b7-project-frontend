import Lodash from "lodash";
const initialState = {
    posts: [],
}

const postsSlice = (state = initialState, action) => {
    let postsCopy = Lodash.cloneDeep(state.posts);
    switch(action.type) {
        case "SET_POST": {
            return {
                ...state,
                posts: action.payload
            }
        }
        case "ADD_POST": {
            postsCopy = [...state.posts, action.payload]
            return  {
                ...state,
                posts: postsCopy
            }
        }
        case "EDIT_POST": {
            let index = postsCopy.findIndex( (post) => post._id === action.payload._id);
            if (index !== -1)
            postsCopy[index] = action.payload
            return {
                ...state,
                posts: postsCopy
            }
        }
        case "DEL_POST": {
            let index = postsCopy.findIndex( (post) => post._id === action.payload._id);
            if ( index !== -1 )
            postsCopy.splice(index, 1)
            return  {
                ...state,
                posts: postsCopy
            }
        }
        case "ADJ_POST_QTY": {
            let index = postsCopy.findIndex(el => el._id === action.payload._id);
            postsCopy[index] = action.payload;
            return {
                ...state,
                posts: postsCopy
            }
        }
        default: return state;
    }
}

export default postsSlice;