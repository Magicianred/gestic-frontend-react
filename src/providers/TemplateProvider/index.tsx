import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../styles/theme";
import NavBar from "../../components/NavBar";

interface TemplateProviderI {
  children: React.ReactNode;
}

export const TemplateContext = React.createContext({});

function TemplateProvider({ children }: TemplateProviderI) {
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  useEffect(() => {}, []);

  return (
    <TemplateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <ChakraProvider theme={theme}>
        <NavBar />
        {children}
      </ChakraProvider>
    </TemplateContext.Provider>
  );
}
export default TemplateProvider;

export const useTemplate = () => React.useContext(TemplateContext);
