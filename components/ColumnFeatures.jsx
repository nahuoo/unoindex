import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { StarIcon, ChatIcon, InfoIcon } from '@chakra-ui/icons'


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={20} bgImage="url('https://www.transparenttextures.com/patterns/connected.png')">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Feature
          icon={<Icon as={ChatIcon} w={10} h={10} />}
          title={'Representantes'}
          text={
            'Representantes oficial de importantes marcas'
          }
        />
        <Feature
          icon={<Icon as={InfoIcon} w={10} h={10} />}
          title={'Mantenimientos'}
          text={
            'Mas de 30 años de servicio técnico'
          }
        />
        <Feature
          icon={<Icon as={StarIcon} w={10} h={10} />}
          title={'Comprometidos'}
          text={
            'Buscamos la mejor solución para cada laboratorio'
          }
        />
      </SimpleGrid>
    </Box>
  );
}