// import './App.less';
import MainTabbar from './components/common/tabbar/MainTabbar'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import mainRouter from './router/index';
import './App.css';
function App(props) {
  return (
    <div className="App">
      <Router>

        <CacheSwitch>
          {
            mainRouter.map((router) => {
              return router.keepAlive ? 
              <CacheRoute path={router.path} component={router.component} when="always"></CacheRoute> 
              : 
              <Route path={router.path} component={router.component}></Route>
            })
          }
          <Redirect from="/" to="/home" exact></Redirect>
          <Redirect to="/404"></Redirect>

        </CacheSwitch>
        <MainTabbar className="main-tab-bar"></MainTabbar>
      </Router>
      
    </div>
  );
}

export default App;
