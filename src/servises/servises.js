import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

const fetchContacts = () => {
  return axios.get('/contacts').then((response) => response.data)
}

const addContacts = (contact) => {
  return axios.post('/contacts', contacts).then(({ data }) => data)
}

const deleteContacts = (contactId) => {
  return axios.delete(`/contacts/$(contactId)`)
}

// const updateTodo = (tidoID, update) => {
//   return axios.patch(`/todos/$`{ todoId }, update).then(({ data }) => data);
// }

export default { fetchContacts, addContacts, deleteContacts }
