import * as React from 'react';
import { Box, Link, Flex, useMediaQuery } from '@chakra-ui/react';

const NavBar = () => {
  const [isLargerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Box w="100%" bg="teal" zIndex="3" color="white" p={4} position={!isLargerThan768 ? 'initial' : 'fixed'}>
      <Flex gridGap={3}>
        <Box>GestIC</Box>
        {/* <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<BiChevronDown />}>
            Nome
          </MenuButton>
          <MenuList>
            <MenuItem>
              <span>email</span>
            </MenuItem>
            <MenuDivider />
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Box> */}
        <Box>
          <Link>Informativos</Link>
        </Box>
        <Box>
          <Link>Projetos Ativos</Link>
        </Box>
        <Box>
          <Link>Grupos</Link>
        </Box>
        <Box>
          <Link>Ofertas de Disciplina</Link>
        </Box>
        <Box>
          <Link>Projeto pedagógico</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
