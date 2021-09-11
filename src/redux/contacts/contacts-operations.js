import axios from 'axios'
import actions from './contacts-action'

// axios.defaults.baseURL = 'http://localhost:3004'

export const fatchContact = () => async (dispatch) => {
  dispatch(actions.fatchContactRequest())
  try {
    const { data } = await axios.get('/contacts')
    dispatch(actions.fatchContactSuccess(data))
  } catch (error) {
    dispatch(actions.fatchContactError(error.message))
  }
  // const response = await axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(actions.fatchContactSuccess(data)))
  //   .catch((arror) => dispatch(actions.fatchConta                                 ctError(arror)))
}

export const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest())

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)))
}

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.onDeleteContactRequest())

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.onDeleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.onDeleteContactError(error)))
}
