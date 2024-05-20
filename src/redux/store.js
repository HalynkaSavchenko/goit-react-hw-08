import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/slice';
import filterReducer from './filters/slice';
import authReducer from './auth/slice'
// import { 
//   persistStore, 
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, 
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ['items'],
// };

// const persistContactReducer = persistReducer(persistConfig, contactReducer);

  export const store = configureStore({
    reducer: {
      contacts: contactReducer,
      filter: filterReducer,
      auth: authReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
  });

  // export const persistor = persistStore(store)
