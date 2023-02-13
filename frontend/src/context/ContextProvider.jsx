import { createContext, useState } from "react";

export const ContextApp = createContext();

export function ContextAppProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [flag,setFlag]=useState(false)
  return (
    <ContextApp.Provider value={{ auth, setAuth,flag,setFlag }}>
      {children}
    </ContextApp.Provider>
  );
}
