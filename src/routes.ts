import { Route } from './models'
import Home from './pages/Home'
import Landing from './pages/Landing'


export const urls = {
  root: '/root',
  landing: '/landing'

}


export const routes: Route[] = [
  { url: urls.root, content: Home },
  { url: urls.landing, content: Landing },

]
