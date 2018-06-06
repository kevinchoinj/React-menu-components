import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import './styles/menuone.css';
import './styles/menutwo.css';
import './styles/menuthree.css';
import './styles/menufour.css';

import Home from './pages/Home';

import './styles/mainmenu.css';
import MainMenuWrap from './components/MainMenuWrap';

import MenuPageOne from './pages/MenuPageOne';
import MenuPageTwo from './pages/MenuPageTwo';
import MenuPageThree from './pages/MenuPageThree';
import MenuPageFour from './pages/MenuPageFour';

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
          <Route
            exact path="/menus/3"
            render={(props) =>
              <MenuPageThree {...props} />
            }
          />
          <Route
            exact path="/menus/4"
            render={(props) =>
              <MenuPageFour {...props} />
            }
          />
        </Switch>
        <MainMenuWrap/>
      </div>
    );
  }
}

export default App;
