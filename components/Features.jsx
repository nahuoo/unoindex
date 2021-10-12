import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import { TriangleUpIcon } from '@chakra-ui/icons'
  
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
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12} bgImage="https://www.transparenttextures.com/patterns/connected.png'">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>       
            <Heading>Servicios integrales</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Ofrecemos soluciónes para laboratorios de análisis clínicos
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature              
                icon={<Icon as={TriangleUpIcon} color={'cyan.200'} w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'yellow.900')}
                text={'Mantenimiento preventivos'}
              />
              <Feature
                icon={<Icon as={TriangleUpIcon} color={'cyan.400'} w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'green.900')}
                text={'Servicio técnico oficial'}
              />
              <Feature
                icon={
                  <Icon as={TriangleUpIcon} color={'cyan.600'} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'purple.900')}
                text={'Instalación de laboratorios'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                '/frente.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }