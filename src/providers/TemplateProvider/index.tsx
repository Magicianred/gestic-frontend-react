import React, { useEffect, useState } from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import theme from '../../styles/theme';
import NavBar from '../../components/NavBar';

interface TemplateProviderI {
  children: React.ReactNode;
}

export const TemplateContext = React.createContext({});

function TemplateProvider({ children }: TemplateProviderI) {
  const [isLargerThan768] = useMediaQuery('(max-width: 768px)');
  const [user, setUser] = useState({
    id: '',
    email: '',
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
        <div style={{ paddingTop: !isLargerThan768 ? 'initial' : '3.5rem' }}>{children}</div>
      </ChakraProvider>
    </TemplateContext.Provider>
  );
}
export default TemplateProvider;

export const useTemplate = () => React.useContext(TemplateContext);
