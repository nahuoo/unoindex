import React from "react"
import {
  SimpleGrid,
  Image,
  Text,
  StackDivider,
  Stack,
  Heading,
} from "@chakra-ui/react";

export const SliderSection = ({data}) => {
  return (
    <>
      <SimpleGrid
        bg={"#fcfcfc"}
        bgImage={
          'url("https://www.transparenttextures.com/patterns/connected.png")'
        }
        p={20}
        textAlign={"center"}
      >
        <Heading color={"gray.700"}>
          Mas de 20+ marcas confían en nosotros:
        </Heading>
        <Stack
          bg={"#fcfcfc"}
          bgImage={
            'url("https://www.transparenttextures.com/patterns/connected.png")'
          }
          spacing={4}
          divider={<StackDivider borderColor="gray.100" />}
        />
      </SimpleGrid>
      <SimpleGrid
        p="20px"
        alignItems="center"
        minChildWidth="120px"
        spacing="20px"
        pb={10}
        bg={"#fcfcfc"}
        bgImage={
          'url("https://www.transparenttextures.com/patterns/connected.png")'
        }
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
