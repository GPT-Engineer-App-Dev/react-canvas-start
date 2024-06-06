import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="xl">This is your starting point. Begin building something amazing!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
        <Button onClick={logout} colorScheme="red" size="lg">
          Logout
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;