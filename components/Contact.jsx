import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Select,
  Textarea,
  Tooltip,
  useColorModeValue,
  VStack
} from "@chakra-ui/react"
import { FaInstagram, FaFacebook, FaRegEnvelope } from "react-icons/fa";
export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqlwdgr");
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
    >
      <Box
        borderRadius="lg"
        bg={"gray.800"}
        w={"full"}
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Contacto
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              w={"60%"}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip label={"Mandar email!"} closeOnClick={false} hasArrow>
                  <Link href="mailto:unoelectromedicina@gmail.com">
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FaRegEnvelope />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
                <Link href="https://www.facebook.com/uno.electromedicina">
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<FaFacebook />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.instagram.com/unoelectromedicina">
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<FaInstagram />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue("white", "gray.700")}
                w={"full"}
                borderRadius="lg"
                p={{ base: 3, lg: 8 }}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                fontSize={{ base: "sm", lg: 0 }}
              >
                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>

                      <InputGroup>
                        <Input
                          type="text"
                          name="Nombre"
                          placeholder="Nombre y apellido"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Cantidad de pacientes por día</FormLabel>

                      <InputGroup>
                        <Input
                          type="number"
                          name="Pacientes por dia"
                          placeholder="Cantidad de muestras"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Tipo de laboratorio</FormLabel>

                      <InputGroup>
                        <Select
                          placeholder="seleccionar"
                          type="select"
                          name="tipo de laboratorio"
                        >
                          <option value="Particular">Particular</option>
                          <option value="Hospital">Hospital</option>
                          <option value="Clinica">Clínica/Sanatorio</option>
                          <option value="Veterinaria">Veterinaria</option>
                          <option value="Investigacion">Investigación</option>
                        </Select>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email de contacto"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Mensaje</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Escribinos..."
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      disabled={state.submitting || state.succeeded}
                      colorScheme="blue"
                      bg={state.succeeded ? "blue.900" : "blue.400"}
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      isFullWidth
                    >
                      {state.succeeded ? "Mensaje enviado!" : "Enviar mensaje"}
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
