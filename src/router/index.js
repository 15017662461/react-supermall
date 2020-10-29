import { Home, Cart, Category, Profile, NotFound,Detail } from './../views/index';

const mainRouter = [
  { path: '/home', component: Home },
  { path: '/Category', component: Category },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
  { path: '/detail', component: Detail },
  { path: '/404', component: NotFound },
]

export default mainRouter;