import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperathions from '../../redux/auth/auth-operathions'

export default function LoginView() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperathions.logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">LogIn</button>
      </form>
    </div>
  )
}
