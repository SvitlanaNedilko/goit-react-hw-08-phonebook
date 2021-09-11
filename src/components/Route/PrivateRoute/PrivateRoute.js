import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import authSelectors from '../../../redux/auth/auth-selectors'

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggenIn = useSelector(authSelectors.getIsLoggenIn)

  return (
    <Route {...routeProps}>
      {isLoggenIn ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}
