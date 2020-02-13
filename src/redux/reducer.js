const initialState = {
  user: null,
  rData: null,
  error: null,
  rItem: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return { ...state, user: action.payload };

    case "LOGIN_USER_FAILURE":
      return null;

    case "DATA_SUCCESS":
      return { ...state, rData: action.payload };

    case "DATA_ERROR":
      return { ...state, error: action.payload };

    case "ADD_TABLE_ITEM":
      return { ...state, rData: [...state.rData, action.payload] };

    case "EDIT_TABLE_ITEM":
      const index = state.rData.findIndex(
        item => item._id === action.payload._id
      );
      state.rData.splice(index, 1, action.payload);
      return { ...state, rData: [...state.rData] };

    case "REMOVE_TABLE_ITEM":
      return {
        ...state,
        rData: [...state.rData.filter(item => item._id !== action.payload._id)]
      };

    case "REMOVE_CHEKED_TABLE_ITEM":
      const newData = state.rData.filter((item, index) => {
        let valideItem = true;

        action.payload.forEach(deletedElementIndex => {
          if (deletedElementIndex === index) {
            valideItem = false;
          }
        });
        return valideItem;
      });

      return {
        ...state,
        rItem: action.payload,
        rData: newData
      };

    default:
      return state;
  }
};
export default reducer;
