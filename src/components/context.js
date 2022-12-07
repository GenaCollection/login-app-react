import { createContext, useState } from "react";

export const newContext = createContext();

export const NewProvider = (props) => {
  const [state, setState] = useState("");

  const val = { state, setState };

  return (
    <newContext.Provider value={val}>{props.children}</newContext.Provider>
  );
};
