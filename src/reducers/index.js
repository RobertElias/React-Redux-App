const initialState = {
    isLoading: false,
    value: null,   
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCHING_ACTIVITY_START':
        return {
          ...state,
          isLoading: true
        };
      case 'FETCHING_DATA_SUCCESS':
        return {
          ...state,
          isLoading: false,
          value: action.payload
          
        };
      default:
        return state;
    }
  };
  