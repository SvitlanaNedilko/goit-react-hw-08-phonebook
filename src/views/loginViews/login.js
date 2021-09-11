import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperathions from '../../redux/auth/auth-operathions'
import './login.scss'

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
    <form onSubmit={handleSubmit} className="login-form">
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
        disabled={!(email && password)}
      >
        Log in
      </Button>
    </form>
  )
}
