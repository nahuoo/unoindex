import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {useEffect} from 'react'
 
  

  
/*
  const client = createClient({
    space: 'ftv5t2jre3bg',
    accessToken: '4qNarz5C8ZqLGHZFXdvdsEe2OehC3fxp1Qnx_EfNKHI'
  })

 export async function getStaticProps () {
  const res = await client.getEntries()
  return{
    props: {
      equipos: res.items
    }
  }
}
   
    */
  
const Hero =() => {
  

// CFPAT-jPyP2S48v4RODt-hfoNeywkAYgBIxx-571Z5tGR-3rY

    return (
      <Container
        maxW={"7xl"}
        bgImage="url('https://www.transparenttextures.com/patterns/connected.png')"
      >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          pl={{ base: 0, md: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.2}
              fontWeight={800}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                fontSize="80px"
                as={"span"}
                color={"red.base"}
                position={"relative"}
                zIndex={99}
              >
                Uno
              </Text>
              <br />
              <Text
                zIndex={99}
                as={"span"}
                color={"gray.700"}
                position={"relative"}
              >
                Electromedicina
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Equipamiento y servicio técnico de laboratorios
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                zIndex={99}
                onClick={() => getStaticProps}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={""}
                bg={"verde"}
                _hover={{ bg: "cyan.600" }}
              >
                Equipos
              </Button>
              <Button
                zIndex={99}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
              >
                Insumos
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"Grupo160.png"}
            />
          </Flex>
        </Stack>
      </Container>
    );
  }

  export default Hero