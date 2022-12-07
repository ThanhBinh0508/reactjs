import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { productApi } from '../services/product'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authReducer from '../slices/auth';
import storage from 'redux-persist/lib/storage';
import { authApi } from '../services/auth';
import { cartApi } from '../services/cart';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}
const rootReducer = combineReducers({
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(productApi.middleware, authApi.middleware, cartApi.middleware),
})
export default persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;