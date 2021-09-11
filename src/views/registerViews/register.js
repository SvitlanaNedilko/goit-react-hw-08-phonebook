import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperathions from '../../redux/auth/auth-operathions'

export default function RegisterView() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperathions.register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="ContactForm_Input">
          Имя
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
          />
        </label>
        <label className="ContactForm_Input">
          Почта
          <input
            type="text"
            value={email}
            name="email"
            // value={number}
            onChange={handleChange}
          />
        </label>

        <label className="ContactForm_Input">
          Пароль
          <input
            type="text"
            value={password}
            name="password"
            // value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  )
}
