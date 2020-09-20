import { createContext } from 'react';

const AppContext: any = createContext({
  events: [],
  dispatch: {},
});

export default AppContext;
