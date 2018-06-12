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
import './styles/menueight.css';
import './styles/menunine.css';

import './index.css';
import Home from './pages/Home';

import './styles/mainmenu.css';
import MainMenuWrap from './components/main/MainMenuWrap';

import MenuPageOne from './pages/MenuPageOne';
import MenuPageTwo from './pages/MenuPageTwo';
import MenuPageThree from './pages/MenuPageThree';
import MenuPageFour from './pages/MenuPageFour';
import MenuPageFive from './pages/MenuPageFive';
import MenuPageSix from './pages/MenuPageSix';
import MenuPageSeven from './pages/MenuPageSeven';
import MenuPageEight from './pages/MenuPageEight';
import MenuPageNine from './pages/MenuPageNine';

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
          <Route
            exact path="/menus/8"
            render={(props) =>
              <MenuPageEight {...props} />
            }
          />
          <Route
            path="/menus/9"
            render={(props) =>
              <MenuPageNine {...props} />
            }
          />

        </Switch>
        <MainMenuWrap/>
      </div>
    );
  }
}

export default App;
