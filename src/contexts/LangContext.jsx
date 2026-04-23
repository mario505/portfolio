import { createContext, useContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [langIndex, setLangIndex] = useState(0);

  const handleSetLangIndex = () => {
    setLangIndex((prev) => {
      if (prev === 0) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <LangContext.Provider value={{ langIndex, handleSetLangIndex }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const contextValue = useContext(LangContext);
  if (!contextValue) {
    throw new Error("useLang must be used inside of LangProvider");
  }

  return contextValue;
};
