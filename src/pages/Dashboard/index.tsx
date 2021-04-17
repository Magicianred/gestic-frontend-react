import * as React from 'react';
import { Box, SimpleGrid, Icon, Heading, Link, useMediaQuery } from '@chakra-ui/react';
import { AiOutlineInfoCircle, AiOutlineFundProjectionScreen, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { IoMdSchool } from 'react-icons/io';
import Informative from '../../components/Informative';
import { Page } from '../../components/Page';

const Dashboard = () => {
  const [isLargerThan766] = useMediaQuery('(max-width: 766px)');

  return (
    <Page>
      <Box textAlign="center" fontSize="xl" p={8}>
        <SimpleGrid columns={[1, null, 2]} minH="100%" spacing={8} justifyItems="center">
          <Informative />
          {!isLargerThan766 && (
            <Box w="70%">
              <Link
                color="teal"
                // _hover={{
                //   backgroundColor: 'blue',
                //   color: 'white',
                // }}
              >
                <Box
                  border="1px"
                  p={4}
                  // w="72"
                  // h="44"
                  display="flex"
                  // flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Icon as={AiOutlineFundProjectionScreen} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Projetos Ativos
                  </Heading>
                </Box>
              </Link>
              <Link color="teal">
                <Box
                  border="1px"
                  p={4}
                  // w="72"
                  // h="44"
                  display="flex"
                  // flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Icon as={BiGroup} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Grupos
                  </Heading>
                </Box>
              </Link>
              <Link
                color="teal"
                // _hover={{
                //   backgroundColor: 'blue',
                //   color: 'white',
                // }}
              >
                <Box
                  border="1px"
                  p={4}
                  // w="72"
                  // h="44"
                  display="flex"
                  // flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Icon as={AiOutlineUnorderedList} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Ofertas de disciplina
                  </Heading>
                </Box>
              </Link>
              <Link
                color="teal"
                // _hover={{
                //   backgroundColor: 'blue',
                //   color: 'white',
                // }}
              >
                <Box
                  border="1px"
                  p={4}
                  // w="72"
                  // h="44"
                  display="flex"
                  // flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                >
                  <Icon as={IoMdSchool} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Projeto Pedagógico
                  </Heading>
                </Box>
              </Link>
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </Page>
  );
};

export default Dashboard;
