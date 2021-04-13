import * as React from 'react';
import { Box, SimpleGrid, Icon, Heading, Link } from '@chakra-ui/react';
import { AiOutlineInfoCircle, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';

const Dashboard = () => (
  <Box textAlign="center" fontSize="xl" p={12}>
    <SimpleGrid columns={[1, null, 3]} minH="100%" p={3} spacing={4} justifyItems="center">
      <Link color="teal">
        <Box
          border="1px"
          p={4}
          w="72"
          h="44"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={AiOutlineInfoCircle} fontSize="2rem" mb={2} />
          <Heading fontSize="x-large" textTransform="uppercase">
            Informativos
          </Heading>
        </Box>
      </Link>
      <Link color="teal">
        <Box
          border="1px"
          p={4}
          w="72"
          h="44"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={AiOutlineFundProjectionScreen} fontSize="2rem" mb={2} />
          <Heading fontSize="x-large" textTransform="uppercase">
            Projetos Antigos
          </Heading>
        </Box>
      </Link>
      <Link color="teal">
        <Box
          border="1px"
          p={4}
          w="72"
          h="44"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={BiGroup} fontSize="2rem" mb={2} />
          <Heading fontSize="x-large" textTransform="uppercase">
            Grupos
          </Heading>
        </Box>
      </Link>
    </SimpleGrid>
  </Box>
);

export default Dashboard;
