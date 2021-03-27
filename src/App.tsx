import * as React from "react";
import AppProvider from "./providers/AppProvider";
import {
  Box,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";

export const App = () => (
  <AppProvider>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>Hello, world</Text>
        </VStack>
      </Grid>
    </Box>
  </AppProvider>
);
