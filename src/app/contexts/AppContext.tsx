import { createContext, useState, useContext, SetStateAction } from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const defaultAppContext = {
  data: [],
  setData: (value: SetStateAction<never[]>) => {},
};

const AppContext = createContext(defaultAppContext);

export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }: Props) => {
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
