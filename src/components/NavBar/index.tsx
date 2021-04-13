import * as React from 'react';
import {
  Box,
  Link,
  // Button,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
  Flex,
} from '@chakra-ui/react';
// import { BiChevronDown } from "react-icons/bi";

const NavBar = () => (
  <Box bg="teal" color="white" p={4}>
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
    </Flex>
  </Box>
);

export default NavBar;
