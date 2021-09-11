import { Switch } from 'react-router'

import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authOperathions from './redux/auth/auth-operathions'
import authSelectors from './redux/auth/auth-selectors'

import Navigation from './components/Navigation/Navigation'
import PrivateRoute from './components/Route/PrivateRoute/PrivateRoute'
import PublicRoute from './components/Route/PublicRoute/PublicRoute'
import './App.scss'
import { BASE_URL } from '.'

const RegisterView = lazy(() => import('./views/registerViews/register'))
const LoginView = lazy(() => import('./views/loginViews/login'))
const ContactsView = lazy(() => import('./views/contactsViews/contactViews'))
const HomeView = lazy(() => import('./views/homeViews/homeViews'))

function App() {
  const dispatch = useDispatch()
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent)

  useEffect(() => {
    dispatch(authOperathions.fetchCurrentUser())
  }, [dispatch])

  return (
    !isFetchingCurrentUser && (
      <>
        <Navigation />

        <div className="AppRoot">
          <Switch>
            <Suspense fallback={<p>Загружаем....</p>}>
              <PublicRoute exact path={`${BASE_URL}/`}>
                <HomeView />
              </PublicRoute>

              <PublicRoute
                path={`${BASE_URL}/register`}
                restricted
                redirectTo={`${BASE_URL}/contactsbook`}
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                path={`${BASE_URL}/login`}
                restricted
                redirectTo={`${BASE_URL}/contactsbook`}
              >
                <LoginView />
              </PublicRoute>

              <PrivateRoute
                path={`${BASE_URL}/contactsbook`}
                redirectTo={`${BASE_URL}/`}
              >
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </div>
      </>
    )
  )
}
export default App
