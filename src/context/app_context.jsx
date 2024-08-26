import React, { createContext, useState, useMemo } from "react";


export const AppContext = createContext(null);


export default function AppContextProvider({ children }) {
  const [offset, setOffset] = useState(4);
  const [search, setSearch] = useState("");

  const ctxValue = useMemo(
    () => ({
      offset,
      search,
      setOffset,
      setSearch,
    }),
    [offset, search]
  );

  return (
    <AppContext.Provider value={ctxValue}>
      {children}
    </AppContext.Provider>
  );
}
