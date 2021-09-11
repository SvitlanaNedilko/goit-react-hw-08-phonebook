import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Navigation/Navigation.scss'
import { UserMenu } from '../UserMenu/UserMenu'
import authSelectors from '../../redux/auth/auth-selectors'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn)
  return (
    <div className="navigation">
      <nav>
        <NavLink to="/" exact className="link" activeClassName="activlink">
          Home
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink
              to="/register"
              exact
              className="link"
              activeClassName="activlink"
            >
              Registration
            </NavLink>

            <NavLink to="/login" className="link" activeClassName="activlink">
              LogIn
            </NavLink>
          </>
        )}

        {isLoggedIn && (
          <NavLink
            to="/contactsbook"
            className="link"
            activeClassName="activlink"
          >
            contactsbook
          </NavLink>
        )}
      </nav>
      {isLoggedIn && <UserMenu />}
    </div>
  )
}
