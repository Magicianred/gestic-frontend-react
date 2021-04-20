import * as React from 'react';
import { Box, Heading, Skeleton } from '@chakra-ui/react';

const Informative = () => (
  <Box fontSize="xl" w="100%">
    <Heading color="teal" textAlign="center" mb={4}>
      Informativos
    </Heading>
    <Skeleton height="100vh" />
  </Box>
);

export default Informative;
