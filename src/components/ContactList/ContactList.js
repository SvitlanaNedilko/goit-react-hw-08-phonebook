import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getVisibleContacts, deleteContact, fatchContact } from '../../redux'
import './ContactList.scss'

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts)
  const dispatch = useDispatch()
  const onDeleteContact = (id) => dispatch(deleteContact(id))

  useEffect(() => {
    dispatch(fatchContact())
  }, [dispatch])

  return (
    <ul className="ContactList">
      {!!contacts.length &&
        contacts.map(({ id, name, number }) => (
          <li className="ContactList_Item" key={id}>
            <p className="ContactList_Name">{name}</p>
            <p>{number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}

export default ContactList
