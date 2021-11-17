const initialState = {
  axiosPort: "http://localhost:8000/",
  beneficiaries: [],
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // BENEFICIARIES
    case "SET_BENEFICIARIES":
      return {
        ...state,
        beneficiaries: action.payload,
      };
    case "ADD_BENEFICIARY":
      let beneficiaryCopy = [...state.beneficiaries, action.payload];
      return {
        ...state,
        beneficiaries: beneficiaryCopy,
      };
    
    case "EDIT_BENEFICIARY":
      let beneficiaryCopy = [...state.beneficiaries];
      let index = beneficiaryCopy.findIndex(
        (beneficiary) => beneficiary._id === action.payload._id
      );
      if (index !== -1) beneficiaryCopy[index] = action.payload;

      return {
        ...state,
        beneficiaries: beneficiaryCopy,
      };
    
    case "DEL_BENEFICIARY":
      let beneficiaryCopy = [...state.beneficiaries];
      let index = beneficiaryCopy.findIndex(
        (beneficiary) => beneficiary._id === action.payload._id
      );
      if (index !== -1) beneficiaryCopy.splice(index, 1);
      return {
        ...state,
        beneficiaries: beneficiaryCopy,
      };
    
    // POSTS
    case "SET_POST":
      return {
        ...state,
        posts: action.payload,
      };
    
    case "ADD_POST":
      let postCopy = [...state.posts, action.payload];
      return {
        ...state,
        posts: postCopy,
      };
    
    case "EDIT_POST":
      let postCopy = [...state.posts];
      let index = postCopy.findIndex((post) => post._id === action.payload._id);
      if (index !== -1) postCopy[index] = action.payload;

      return {
        ...state,
        posts: postCopy,
      };
    case "DEL_POST":
      let postCopy = [...state.posts];
      let index = postCopy.findIndex((post) => post._id === action.payload._id);
      if (index !== -1) postCopy.splice(index, 1);
      
      return {
        ...state,
        posts: postCopy,
      };

    default:
      return state;
  }
};

export default reducer;
