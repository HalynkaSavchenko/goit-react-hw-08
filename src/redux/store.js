import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
import filterReducer from './filtersSlice';
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
      filter: filterReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
  });

  // export const persistor = persistStore(store)
