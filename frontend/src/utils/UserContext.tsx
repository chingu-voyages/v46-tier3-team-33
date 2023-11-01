import { createContext } from "react";
import { UserContextType } from "./interface";
//attempting to utilise useContext to hold state for other components

const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export default UserContext;
