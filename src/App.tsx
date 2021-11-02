import React, { FC, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Providers from './providers'
import { urls } from './routes'
import GlobalStyle from './styles/global'
const Complains = lazy(() => import('./pages/Complains'))
const Thanks = lazy(() => import('./pages/Thanks'))
const Home = lazy(() => import('./pages/Home'))
const Landing1 = lazy(() => import('./pages/Landing1'))
const Landing2 = lazy(() => import('./pages/Landing2'))
const Join = lazy(() => import('./pages/Join'))

const App: FC = () => (
  <Providers>
    <Switch>
      <Route path={urls.root} exact={true}>
        <Suspense fallback={<></>}>
          <Home />
        </Suspense>
      </Route>
      <Route path={urls.complains} exact={true}>
        <Suspense fallback={<></>}>
          <Complains />
        </Suspense>
      </Route>
      <Route path={urls.join} exact={true}>
        <Suspense fallback={<></>}>
          <Join />
        </Suspense>
      </Route>
      <Route path={urls.thanks} exact={true}>
        <Suspense fallback={<></>}>
          <Thanks />
        </Suspense>
      </Route>
      <Route path={urls.landing1} exact={true}>
        <Suspense fallback={<></>}>
          <Landing1 />
        </Suspense>
      </Route>
      <Route path={urls.landing2} exact={true}>
        <Suspense fallback={<></>}>
          <Landing2 />
        </Suspense>
      </Route>
    </Switch>
    <GlobalStyle />
  </Providers>
)

export default App
