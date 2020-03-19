const fetchPhotosLoading = () => {
    return {
        type: 'FETCH_SUCCESS'
    }
}

const fetchPhotosSucces = photos => {
    return {
        type: 'FETCH_SUCCESS',
        payload: photos
    }
}

const fetchPhotosError = error => {
    return {
        type: 'FETCH_ERROR',
        payload: error
    }
}

export const fetchPhotos = () => {
    return function(dispatch) {
        dispatch(fetchPhotosLoading());
        fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .then(response => response.json())
            .then(data => {
                let pictures = data.map(obj => {
                    return {
                        id: obj.id,
                        name: obj.alt_description,
                        author: obj.user.name,
                        icon: obj.urls.thumb,
                        fullImg: obj.urls.full
                    };              
                });
                dispatch(fetchPhotosSucces(pictures))
            })
            .catch(error => {
                dispatch(fetchPhotosError(error.message))
            })          
    }
}