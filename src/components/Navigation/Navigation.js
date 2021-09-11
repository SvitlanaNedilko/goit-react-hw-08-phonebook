import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Navigation/Navigation.scss'
import { UserMenu } from '../UserMenu/UserMenu'
import authSelectors from '../../redux/auth/auth-selectors'
import { BASE_URL } from '../../.'
import { AppBar, Toolbar } from '@material-ui/core'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn)
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <NavLink
          to={`${BASE_URL}/`}
          exact
          className="link"
          activeClassName="activlink"
        >
          Home
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink
              to={`${BASE_URL}/register`}
              exact
              className="link"
              activeClassName="activlink"
            >
              Registration
            </NavLink>

            <NavLink
              to={`${BASE_URL}/login`}
              className="link"
              activeClassName="activlink"
            >
              LogIn
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLink
              to={`${BASE_URL}/contactsbook`}
              className="link"
              activeClassName="activlink"
            >
              contactsbook
            </NavLink>
            <UserMenu />
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
