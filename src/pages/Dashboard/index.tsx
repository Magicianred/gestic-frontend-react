import * as React from "react";
import { Box, Text, VStack, Grid } from "@chakra-ui/react";

const Dashboard = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Text>Hello, world</Text>
      </VStack>
    </Grid>
  </Box>
);

export default Dashboard;
