import { Home, Cart, Category, Profile, NotFound,Detail } from './../views/index';

const mainRouter = [
  { path: '/home', component: Home,keepAlive:true },
  { path: '/Category', component: Category,keepAlive:false },
  { path: '/cart', component: Cart,keepAlive:false },
  { path: '/profile', component: Profile,keepAlive:false },
  { path: '/detail', component: Detail,keepAlive:false },
  { path: '/404', component: NotFound ,keepAlive:false},
]

export default mainRouter;