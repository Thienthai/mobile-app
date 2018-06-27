import Home from './pages/Signin';
import About from './pages/Home.vue';
import Services from './pages/Services';
import Another from './pages/Another';
import NotFoundPage from './pages/not-found.vue';
import Test from './pages/Test.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/services/',
    component: Services
  },
  {
    path: '/about/another/',
    component: Another
  },
  {
    path: '/test/',
    component: Test
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
