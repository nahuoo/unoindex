import React from "react"
import {
  SimpleGrid,
  Image,
  Text,
  StackDivider,
  Stack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export const SliderSection = ({data}) => {
  return (
    <>
      <SimpleGrid
        p={8}
        textAlign={"center"}
      >
        <Heading color={"gray.500"}>Confian en nosotros:</Heading>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.100", "gray.700")}
            />
          }
        />
      </SimpleGrid>
      <SimpleGrid
        p="20px"
        alignItems="center"
        minChildWidth="120px"
        spacing="20px"
      >
        {data.resources.map((image) => (
          <Image
            key={image.public_id}
            src={`https://res.cloudinary.com/unoelectromedicina/image/upload/v1633365862/${image.public_id}.jpg`}
            alt={image.public_id}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
