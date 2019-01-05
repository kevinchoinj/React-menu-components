import {
  TOGGLE_NAVBAR_SUBMENU,
} from '../actions/navbar';

const DEFAULT_STATE={
  navMenus: {},
};

export default(state=DEFAULT_STATE, payload)=> {
  switch(payload.type){
  case TOGGLE_NAVBAR_SUBMENU:
    Object.keys(state.navMenus).forEach(v => v !== payload.key? state.navMenus[v] = false : null);
    return {
      ...state,
      navMenus: {
        ...state.navMenus,
        [payload.key]: !state.navMenus[payload.key],
      }
    };
  default:
    return state;
  }
};
