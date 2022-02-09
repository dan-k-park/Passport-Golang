import { createContext } from "react";

const INITIAL_STATE = {
  trips: [],
};

const AppContext = createContext(INITIAL_STATE);

export default AppContext;
