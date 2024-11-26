import { configureStore } from '@reduxjs/toolkit'
import BaseApi from './api/BaseApi'

export const store = configureStore({
  reducer: {
      'api': BaseApi.reducer,
  },
  middleware: (getDefaultMiddleWars)=> getDefaultMiddleWars().concat(BaseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch