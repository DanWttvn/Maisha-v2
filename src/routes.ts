import { Route } from './models'
import Complains from './pages/Complains'
import Thanks from './pages/Thanks'
import Home from './pages/Home'
import Landing1 from './pages/Landing1'
import Landing2 from './pages/Landing2'
import Join from './pages/Join'


export const urls = {
  root: '/root',
  complains: '/complains',
  join: '/join',
  thanks: '/thank-you',
  landing1: '/hazte-socio',
  landing2: '/unete'
}


export const routes: Route[] = [
  { url: urls.root, content: Home },
  { url: urls.complains, content: Complains },
  { url: urls.join, content: Join },
  { url: urls.thanks, content: Thanks },
  { url: urls.landing1, content: Landing1 },
  { url: urls.landing2, content: Landing2 },
]
