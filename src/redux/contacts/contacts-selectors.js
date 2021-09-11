import { createSelector } from 'reselect'

export const getContacts = (state) => state.contacts.contactItems
export const getFilter = (state) => state.contacts.filter
export const getLoading = (state) => state.contacts.loading

// export const getVisibleContacts = (state) => {
//   const filter = getFilter(state)
//   const allContacts = getContacts(state)
//   const normalizedFilter = filter.toLowerCase()
//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   )
// }

export const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, allContacts) => {
    const normalizedFilter = filter.toLowerCase()
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
)
