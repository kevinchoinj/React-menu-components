import React, {useReducer, createContext} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
  case 'TOGGLE_MENU':
    return {
      ...state, 
      menuDisplay: action.payload
    };
  default:
    throw new Error();
  };
};

const initialState = {
  menuDisplay: {},
};

const MenuContext = createContext(initialState);

const MenuProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MenuContext.Provider value={{state, dispatch}}>
      {children}
    </MenuContext.Provider>
  );
};

export {MenuContext, MenuProvider};