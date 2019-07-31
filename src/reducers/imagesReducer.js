import { IMAGES } from "../constants/index";

const initialState = {
    images: [],
    numItemsToGenerate: 2,
    numImagesAvailable: 242,
    imageWidth: 480,
    imageHeight: 480,
    collectionID: 1163637
}

const imageReducers = (state = initialState , action) => {
    // console.log(state.images);
    if(action.type === IMAGES.LOAD_SUCCESS){
        return {
            ...state,
            // images: [...action.images]
            images: state.images.concat(action.images)
        }

    }
    return state;
}

export default imageReducers;
