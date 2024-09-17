import React, { createContext, useContext, useState } from "react";

const TabBarContext = createContext({
  hideTabBar: false,
  setHideTabBar: (value: boolean) => {},
});

export const useTabBar = () => useContext(TabBarContext);

export const TabBarProvider = ({ children }: any) => {
  const [hideTabBar, setHideTabBar] = useState(false);

  return (
    <TabBarContext.Provider value={{ hideTabBar, setHideTabBar }}>
      {children}
    </TabBarContext.Provider>
  );
};
