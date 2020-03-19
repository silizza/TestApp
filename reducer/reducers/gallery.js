const initialState = {
    loading: false,
    gallery: [],
    error: false
}

export const galleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_LOADING':
            return {
                loading: true,
                gallery: [],
                error: false
            };
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                gallery: action.payload,
                error: false
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                gallery: action.payload,
                error: true
            }; 
        default:
            return state;   
    }
}