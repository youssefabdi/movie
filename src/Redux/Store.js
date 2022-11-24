import { configureStore } from "@reduxjs/toolkit";
import moviereducer from './SliceMovie';

const store= configureStore({
    reducer:{
        moviereducer
    }
})

export default store