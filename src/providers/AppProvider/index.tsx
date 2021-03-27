import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../styles/theme";

interface AppProviderI {
  children: React.ReactNode;
}

export const AppContext = React.createContext({});

function AppProvider({ children }: AppProviderI) {
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AppContext.Provider>
  );
}
export default AppProvider;

export const useApp = () => React.useContext(AppContext);
