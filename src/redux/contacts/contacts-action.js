import { createAction } from '@reduxjs/toolkit'

const fatchContactRequest = createAction('contacts/fatchContactRequest')
const fatchContactSuccess = createAction('contacts/fatchContactSuccess')
const fatchContactError = createAction('contacts/fatchContactError')

const addContactRequest = createAction('contacts/addContactRequest')
const addContactSuccess = createAction('contacts/addContactSuccess')
const addContactError = createAction('contacts/addContactError')

const onDeleteContactRequest = createAction('contacts/onDeleteContactRequest')
const onDeleteContactSuccess = createAction('contacts/onDeleteContactSuccess')
const onDeleteContactError = createAction('contacts/onDeleteContactError')

const changeFilter = createAction('contacts/changeFilter')

const contactsAction = {
  fatchContactRequest,
  fatchContactSuccess,
  fatchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  onDeleteContactError,
  onDeleteContactRequest,
  onDeleteContactSuccess,
  changeFilter,
}

export default contactsAction
