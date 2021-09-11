import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authOperathions from '../../redux/auth/auth-operathions'
import '../UserMenu/UserMenu.scss'
import authSelectors from '../../redux/auth/auth-selectors'

export function UserMenu() {
  const user = useSelector(authSelectors.getUsername)
  const dispatch = useDispatch()

  return (
    <div className="user_menu">
      <span>{`Hello ${user}`}</span>
      <button
        className="button-logout"
        type="button"
        onClick={() => {
          dispatch(authOperathions.logOut())
        }}
      >
        logout
      </button>
    </div>
  )
}
