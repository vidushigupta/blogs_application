import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./Home";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {
  console.count("here")

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/create'>
              <Create/>
            </Route>
            <Route exact path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default App;