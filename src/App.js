import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './styles/menuone.css';
import './styles/menutwo.css';
import Home from './pages/Home';
import MenuPageOne from './pages/MenuPageOne';
import MenuPageTwo from './pages/MenuPageTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={(props)=>
              <Home {...props} />
            }
          />
          <Route
            exact path="/menus/1"
            render={(props) =>
              <MenuPageOne {...props} />
            }
          />
          <Route
            exact path="/menus/2"
            render={(props) =>
              <MenuPageTwo {...props} />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
