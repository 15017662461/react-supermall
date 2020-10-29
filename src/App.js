// import './App.less';
import MainTabbar from './components/common/tabbar/MainTabbar'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import mainRouter from './router/index';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          {
            mainRouter.map((router) => {
              return <Route path={router.path} component={router.component}></Route>
            })
          }
          <Redirect from="/" to="/home" exact></Redirect>
          <Redirect to="/404"></Redirect>

        </Switch>
        <MainTabbar className="main-tab-bar"></MainTabbar>
      </Router>
      
    </div>
  );
}

export default App;
