import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import './styles/menu1.css';
import './styles/menu2.css';
import './styles/menu3.css';
import './styles/menu4.css';
import './styles/menu5.css';
import './styles/menu6.css';
import './styles/menu7.css';
import './styles/menu8.css';
import './styles/menu9.css';
import './styles/menu10.css';
import './styles/menu11.css';
import './styles/menu12.css';
import './styles/menu13.css';
import './styles/menu14.css';
import './styles/menu15.css';
import './styles/menu16.css';
import './styles/menu17.css';
import './styles/menu18.css';
import './styles/menu19.css';
import './styles/home.css';

import './index.css';
import Home from './pages/Home';

import './styles/mainmenu.css';
import MainMenuWrap from './components/main/MainMenuWrap';

import MenuPageOne from './pages/MenuPage1';
import MenuPageTwo from './pages/MenuPage2';
import MenuPageThree from './pages/MenuPage3';
import MenuPageFour from './pages/MenuPage4';
import MenuPageFive from './pages/MenuPage5';
import MenuPageSix from './pages/MenuPage6';
import MenuPageSeven from './pages/MenuPage7';
import MenuPageEight from './pages/MenuPage8';
import MenuPageNine from './pages/MenuPage9';
import MenuPageTen from './pages/MenuPage10';
import MenuPageEleven from './pages/MenuPage11';
import MenuPageTwelve from './pages/MenuPage12';
import MenuPageThirteen from './pages/MenuPage13';
import MenuPageFourteen from './pages/MenuPage14';
import MenuPageFifteen from './pages/MenuPage15';
import MenuPageSixteen from './pages/MenuPage16';
import MenuPageSeventeen from './pages/MenuPage17';
import MenuPageEighteen from './pages/MenuPage18';
import MenuPageNineteen from './pages/MenuPage19';

import MenuProvider from 'context/MenuProvider';

const App = () => {
  return (
    <div className="App">
      <MenuProvider>
        <Switch>
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
          <Route
            path="/menus/10"
            render={(props) =>
              <MenuPageTen {...props} />
            }
          />
          <Route
            path="/menus/11"
            render={(props) =>
              <MenuPageEleven {...props} />
            }
          />
          <Route
            path="/menus/12"
            render={(props) =>
              <MenuPageTwelve {...props} />
            }
          />
          <Route
            path="/menus/13"
            render={(props) =>
              <MenuPageThirteen {...props} />
            }
          />
          <Route
            path="/menus/14"
            render={(props) =>
              <MenuPageFourteen {...props} />
            }
          />
          <Route
            path="/menus/15"
            render={(props) =>
              <MenuPageFifteen {...props} />
            }
          />
          <Route
            path="/menus/16"
            render={(props) =>
              <MenuPageSixteen {...props} />
            }
          />
          <Route
            path="/menus/17"
            render={(props) =>
              <MenuPageSeventeen {...props} />
            }
          />
          <Route
            path="/menus/18"
            render={(props) =>
              <MenuPageEighteen {...props} />
            }
          />
          <Route
            path="/menus/19"
            render={(props) =>
              <MenuPageNineteen {...props} />
            }
          />
          <Route path="/:id" render={(props)=> <Home {...props} />}/>
        </Switch>
        <MainMenuWrap/>
      </MenuProvider>
    </div>
  );
};

export default App;
