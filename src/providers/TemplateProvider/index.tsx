import React, { useEffect, useState } from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import theme from '../../styles/theme';

interface TemplateProviderI {
  children: React.ReactNode;
}

export const TemplateContext = React.createContext({});

function TemplateProvider({ children }: TemplateProviderI) {
  const [user, setUser] = useState({
    id: '',
    email: '',
  });

  return (
    <TemplateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <ChakraProvider theme={theme}>
        <div>{children}</div>
      </ChakraProvider>
    </TemplateContext.Provider>
  );
}
export default TemplateProvider;

export const useTemplate = () => React.useContext(TemplateContext);
