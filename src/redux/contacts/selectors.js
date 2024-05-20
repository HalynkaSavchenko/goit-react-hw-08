import { createSelector } from '@reduxjs/toolkit'

import { selectNameFilter } from '../filters/selectors'

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;


export const selectVisibleCard = createSelector([selectContacts, selectNameFilter], (contacts, filters) => {
    return contacts.filter(({name}) => name.toLowerCase().includes(filters.toLowerCase()))
})
