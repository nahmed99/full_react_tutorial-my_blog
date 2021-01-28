import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* This switch makes sure that only one route shows in browser at any one time. It checks each route, from top to bottom and stops at the first match found */}

            {/* The 'exact' paramater/prop ensures that the route is selected only when it matches exactly with the url that the user uses */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
