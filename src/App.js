import { Switch } from 'react-router'

import { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authOperathions from './redux/auth/auth-operathions'
import authSelectors from './redux/auth/auth-selectors'

import Navigation from './components/Navigation/Navigation'
import PrivateRoute from './components/Route/PrivateRoute/PrivateRoute'
import PublicRoute from './components/Route/PublicRoute/PublicRoute'
import './App.scss'

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
        <div className="AppRoot">
          <Navigation />
        </div>

        <div className="AppRoot">
          <Switch>
            <Suspense fallback={<p>Загружаем....</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contactsbook"
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" restricted redirectTo="/contactsbook">
                <LoginView />
              </PublicRoute>

              {/* <Route path="/register" component={RegisterView} /> */}

              {/* <Route path="/login" component={LoginView} /> */}

              <PrivateRoute path="/contactsbook" redirectTo="/">
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
