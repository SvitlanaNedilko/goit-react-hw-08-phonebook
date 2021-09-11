import React from 'react'
import { useSelector } from 'react-redux'
import ContactForm from '../../components/ContactForm/ContactForm'
import { getLoading } from '../../redux/contacts/contacts-selectors'
import Filter from '../../components/Filter/Filter'
import ContactList from '../../components/ContactList/ContactList'

export default function ContactsView() {
  const loading = useSelector(getLoading)

  return (
    <>
      <h2 className="AppTitle">Contacts</h2>
      <ContactForm />
      <Filter />
      {loading && <h2>Загружаем...</h2>}
      <ContactList />
    </>
  )
}
