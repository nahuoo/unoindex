import { Box, BoxProps } from "@chakra-ui/react";

export const Card = (props) => {
  const { children, isPopular, ...rest } = props;
  return (
    <Box
      zIndex={20}
      bg="white"
      position="relative"
      px="2"
      pb="6"
      pt="16"
      color={'blackAlpha.700'}
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      {...rest}
    >
      {children}
    </Box>
  );
};
