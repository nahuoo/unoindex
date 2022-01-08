import {
    Container,
    SimpleGrid,
    Image,
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
  } from '@chakra-ui/react';
  import { TriangleUpIcon } from '@chakra-ui/icons'
  import { MdLocalShipping } from "react-icons/md"
  import { ImLab, ImHammer } from "react-icons/im"
  import { PricingCard } from "./PricingCard"

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  const styles = {
    background:'#fcfcfc',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/connected.png")'
  };
  export default function Features() {
    return (
      <div style={styles}>
        <Container maxW={"5xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Heading color={"blackAlpha.700"}>Servicios integrales</Heading>
            <Heading></Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Valoramos la experiencia de nuestros clientes, por eso
              representamos marcas que trabajan día a día bajo el objetivo de
              optimizar la salud en la región.
            </Text>
          </SimpleGrid>
        </Container>

        <Container
          py={12}
          maxW={"full"}
          bg={"#fcfcfc"}
          bgImage={
            'url("https://www.transparenttextures.com/patterns/connected.png")'
          }
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }}>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
              <Stack spacing={{ base: 0, lg: 2 }}></Stack>
              <Box
                h={"1xs"}
                pl={{ base: 0, lg: 20 }}
                mt={{ base: 0, lg: 10 }}
                mr={{ base: 1, lg: -60 }}
                pb={{ base: 60, lg: 0 }}
                zIndex={10}
              >
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/frente.jpg"}
                  objectFit={"cover"}
                />
              </Box>
            </SimpleGrid>
            <Box background="rgba(153, 153, 153, 0.75)" mr={8}></Box>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: "8", lg: "0" }}
            maxW="5xl"
            mx="auto"
            mt="-60"
            justifyItems="center"
            alignItems="center"
          >
            <PricingCard
              data={{
                name: "Equipamiento",
                features: ["Instalación de laboratorios", "Asesoramiento"],
              }}
              icon={MdLocalShipping}
            />
            <PricingCard
              isPopular
              zIndex={30}
              transform={{ lg: "scale(1.05)" }}
              data={{
                name: "Servicio técnico",
                features: [
                  "Mantenimiento preventivo",
                  "Servicio postventa",
                  "Representantes de las marcas mas importantes del país",
                  "Servicio remoto",
                ],
              }}
              icon={ImHammer}
            />
            <PricingCard
              data={{
                name: "Insumos",
                features: [
                  "InVitro",
                  "Descartables",
                  "Para contadores hematológicos",
                  "Bacteriología",
                ],
              }}
              icon={ImLab}
            />
          </SimpleGrid>
        </Container>
      </div>
    );
  }