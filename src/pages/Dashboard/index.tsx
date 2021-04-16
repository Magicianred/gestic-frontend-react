import * as React from 'react';
import { Box, SimpleGrid, Icon, Heading, useMediaQuery } from '@chakra-ui/react';
import { AiOutlineInfoCircle, AiOutlineFundProjectionScreen, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { IoMdSchool } from 'react-icons/io';
import Informative from '../../components/Informative';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeading = styled(Heading)`
  &:hover{
    text-decoration: underline;
  }
`

const Dashboard = () => {
  const [isLargerThan766] = useMediaQuery('(max-width: 766px)');

  return (
    <Box textAlign="center" fontSize="xl" p={8}>
      <SimpleGrid columns={[1, null, 2]} minH="100%" spacing={8} justifyItems="center">
        <Informative />
        {!isLargerThan766 && (
          <Box w="70%">
            <Link
              style={{ color: "teal" }}
              to="/projetos-ativos"
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
                <StyledHeading fontSize="md" textTransform="uppercase">
                  Projetos Ativos
                </StyledHeading>
              </Box>
            </Link>
            <Link
              style={{ color: "teal" }}
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
                <Icon as={BiGroup} fontSize="2rem" mr={2} />
                <StyledHeading fontSize="md" textTransform="uppercase">
                  Grupos
                </StyledHeading>
              </Box>
            </Link>
            <Link
              style={{ color: "teal" }}
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
                <StyledHeading fontSize="md" textTransform="uppercase">
                  Ofertas de disciplina
                </StyledHeading>
              </Box>
            </Link>
            <Link
              style={{ color: "teal" }}
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
                <StyledHeading fontSize="md" textTransform="uppercase">
                  Projeto Pedagógico
                </StyledHeading>
              </Box>
            </Link>
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
