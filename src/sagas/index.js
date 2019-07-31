import { IMAGES } from "../constants/index";
import { takeEvery , takeLatest , select , call , put , all } from 'redux-saga/effects';
import { setImages , setError} from "../actions/index";


const getState = (state) =>  state;


//worker saga
function* handelImageLoad(){

    try{
        const page = yield select(getState);
        // console.log(page.images);
        const images = yield call(fetchImages , page.images);
        // const images = yield all([ call(fetchImages , page.images), put(loadImages()) ])
        yield put(setImages(images))
        console.log(images);
    }catch(err){
        console.log(err);
        yield put(setError(err.toString()))
    }

}

// watcher saga
// take call basically produce inversion of control model
function* rootSaga(){
    // yield takeEvery(IMAGES.LOAD , handelImageLoad);
    yield takeLatest(IMAGES.LOAD , handelImageLoad); //< WILL RECEIVE LATEST CLICK ALL PREVIOUS CLICKS WILL AUTOMATICALLY CANCELED >
    // yield take('LOGIN');
    // yield call(workerSaga);
}


// watcher saga -> actions -> worker saga


//-----------------------------------------------------------------------------------

const fetchImages = async(page) => {
    console.log(page);
    const arr = []
    for (let i = 0; i < page.numItemsToGenerate; i++) {
        let randNum = Math.floor(Math.random() * page.numImagesAvailable);
        const response = await fetch(`https://source.unsplash.com/collection/${page.collectionID}/${page.imageWidth}x${page.imageHeight}/?sig=${randNum}`);
        arr.push(response.url)
    }
    return arr;




}



export default rootSaga;
