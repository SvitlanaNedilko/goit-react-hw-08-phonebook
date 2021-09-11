import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authOperathions from '../../redux/auth/auth-operathions'
import './UserMenu.scss'
import authSelectors from '../../redux/auth/auth-selectors'
import { Button, Typography } from '@material-ui/core'

export function UserMenu() {
  const user = useSelector(authSelectors.getUsername)
  const dispatch = useDispatch()

  return (
    <div className="user_menu">
      <Typography variant="subtitle1">{`Hello ${user}`}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(authOperathions.logOut())
        }}
      >
        Logout
      </Button>
    </div>
  )
}
