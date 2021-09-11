import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperathions from '../../redux/auth/auth-operathions'
import './register.scss'

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
    <form onSubmit={handleSubmit} className="register-form">
      <TextField
        id="name"
        name="name"
        label="Имя"
        onChange={handleChange}
        value={name}
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        label="Почта"
        onChange={handleChange}
        value={email}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        label="Пароль"
        onChange={handleChange}
        value={password}
        fullWidth
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        disabled={!(email && password && name)}
      >
        Sign up
      </Button>
    </form>
  )
}
