import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import './styles/menuone.css';
import './styles/menutwo.css';
import './styles/menuthree.css';
import './styles/menufour.css';
import './styles/menufive.css';
import './styles/menusix.css';
import './styles/menuseven.css';

import './index.css';
import Home from './pages/Home';

import './styles/mainmenu.css';
import MainMenuWrap from './components/MainMenuWrap';

import MenuPageOne from './pages/MenuPageOne';
import MenuPageTwo from './pages/MenuPageTwo';
import MenuPageThree from './pages/MenuPageThree';
import MenuPageFour from './pages/MenuPageFour';
import MenuPageFive from './pages/MenuPageFive';
import MenuPageSix from './pages/MenuPageSix';
import MenuPageSeven from './pages/MenuPageSeven';

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
          <Route
            exact path="/menus/5"
            render={(props) =>
              <MenuPageFive {...props} />
            }
          />
          <Route
            exact path="/menus/6"
            render={(props) =>
              <MenuPageSix {...props} />
            }
          />
          <Route
            exact path="/menus/7"
            render={(props) =>
              <MenuPageSeven {...props} />
            }
          />
        </Switch>
        <MainMenuWrap/>
      </div>
    );
  }
}

export default App;
