import * as React from 'react';
import { Box, SimpleGrid, Menu, MenuButton, Button, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

export const NavBarDesktop = () => {
  const { user, signOut } = useAuth();

  return (
    <SimpleGrid
      display="flex"
      justifyContent="space-between"
      columns={[null, null, 2]}
      w="100%"
      bg="teal"
      zIndex="3"
      color="white"
      p={4}
      gridTemplateColumns="0.5fr 1fr"
      alignItems="center"
    >
      <Box>GestIC</Box>
      <Box display="flex" gridGap={2} alignItems="center">
        <Link to="/">
          <Box
            height="40px"
            textAlign="center"
            display="flex"
            alignItems="center"
            _hover={{
              background: 'rgba(255,255,255,0.2)',
              color: 'rgba(0,0,0,0.7)',
              transitionTimingFunction: 'linear',
              transitionDuration: '0.2s',
            }}
            px={4}
          >
            Informativos
          </Box>
        </Link>
        <Link to="/projetos-ativos">
          <Box
            height="40px"
            textAlign="center"
            display="flex"
            alignItems="center"
            _hover={{
              background: 'rgba(255,255,255,0.2)',
              color: 'rgba(0,0,0,0.7)',
              transitionTimingFunction: 'linear',
              transitionDuration: '0.2s',
            }}
            px={4}
          >
            Projetos Ativos
          </Box>
        </Link>
        <Link to="/grupos">
          <Box
            height="40px"
            textAlign="center"
            display="flex"
            alignItems="center"
            _hover={{
              background: 'rgba(255,255,255,0.2)',
              color: 'rgba(0,0,0,0.7)',
              transitionTimingFunction: 'linear',
              transitionDuration: '0.2s',
            }}
            px={4}
          >
            Grupos
          </Box>
        </Link>
        <Link to="/ofertas-disciplinas">
          <Box
            height="40px"
            textAlign="center"
            display="flex"
            alignItems="center"
            _hover={{
              background: 'rgba(255,255,255,0.2)',
              color: 'rgba(0,0,0,0.7)',
              transitionTimingFunction: 'linear',
              transitionDuration: '0.2s',
            }}
            px={4}
          >
            Ofertas de Disciplina
          </Box>
        </Link>
        <Link to="/projeto-pedagogico">
          <Box
            height="40px"
            textAlign="center"
            display="flex"
            alignItems="center"
            _hover={{
              background: 'rgba(255,255,255,0.2)',
              color: 'rgba(0,0,0,0.7)',
              transitionTimingFunction: 'linear',
              transitionDuration: '0.2s',
            }}
            px={4}
          >
            Projeto pedagógico
          </Box>
        </Link>
        {user && user.id !== '' && (
          <Box color="teal">
            <Menu>
              <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                {user.name}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/perfil">
                    <span>Ir para perfil</span>
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={signOut}>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
      </Box>
    </SimpleGrid>
  );
};
