import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/AuthSlice'
import PostsSlice from './slices/PostsSlice'

export const store = configureStore({
  reducer: {
    auth : AuthSlice,
    posts: PostsSlice
  },
})  
