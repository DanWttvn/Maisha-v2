import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import Providers from './providers'
import { routes } from './routes'
import GlobalStyle from './styles/global'

const Root: FC = () => {
  const pages = routes.map((x, i) => (
    <Route key={i} path={x.url} exact={true}>
      <x.content />
    </Route>
  ))

  return (
    <Providers>
      <Switch>
        {pages}
      </Switch>
      <GlobalStyle />
    </Providers>
  )
}

export default Root
