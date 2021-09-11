import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from './contacts-action'

const contactItems = createReducer([], {
  [actions.fatchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.onDeleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const loading = createReducer(false, {
  [actions.fatchContactRequest]: () => true,
  [actions.fatchContactSuccess]: () => false,
  [actions.fatchContactError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.onDeleteContactRequest]: () => true,
  [actions.onDeleteContactSuccess]: () => false,
  [actions.onDeleteContactError]: () => false,
})

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  contactItems,
  filter,
  loading,
})
