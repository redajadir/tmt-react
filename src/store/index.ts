import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../features/infoSlice'
import experienceReducer from '../features/experienceSlice'
import formationReducer from '../features/formationSlice'

export const store = configureStore({
    reducer: {
        information: headerReducer,
        experience: experienceReducer,
        formation: formationReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch