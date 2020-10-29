import Loadable from 'react-loadable';
import Loading from './loading/Loading';

const Home = Loadable({
  loader:() => import('./home/Home.jsx'),
  loading:Loading
});

const Cart = Loadable({
  loader:() => import('./cart/Cart.jsx'),
  loading:Loading
});

const Category = Loadable({
  loader:() => import('./category/Category.jsx'),
  loading:Loading
});

const Profile = Loadable({
  loader:() => import('./profile/Profile.jsx'),
  loading:Loading
});

const NotFound = Loadable({
  loader:() => import('./notFound/NotFound.jsx'),
  loading:Loading
});

const Detail = Loadable({
  loader:() => import('./detail/Detail.jsx'),
  loading:Loading
});

export {
  Home,
  Cart,
  Category,
  Profile,
  NotFound,
  Detail
}