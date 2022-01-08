import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Box bg={"gray.800"} position={"relative"} id='about'>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="/deposito.jpg"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container pl='10' maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Proveedores
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Insumos para todas las marcas
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                Tenemos insumos para todo tipo de equipamiento de analisis clinicos,
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1}>

          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Contadores hematológicos",
    content: (
      <>
        <StatsText>Diluyentes</StatsText> lisantes, detergentes
      </>
    ),
  },
  {
    title: "Quimica Clínica",
    content: (
      <>
        <StatsText>In Vitro</StatsText> 
      </>
    ),
  },
  {
    title: "Descartables",
    content: (
      <>
        <StatsText>Descartables</StatsText> Vitis, Deltalab
      </>
    ),
  },
  {
    title: "250+",
    content: (
      <>
        <StatsText>Ciudades</StatsText> confian en nosotros
      </>
    ),
  },
];
