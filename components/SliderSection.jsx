import React from "react"
import { SimpleGrid, Image } from "@chakra-ui/react"

export const SliderSection = ({data}) => {
  return (
    <SimpleGrid p='20px' alignItems='center' minChildWidth="120px" spacing="20px">
      {data.resources.map((image) => (
        <Image
          key={image.public_id}
          src={`https://res.cloudinary.com/unoelectromedicina/image/upload/v1633365862/${image.public_id}.jpg`}
          alt={image.public_id}
        />
      ))}
    </SimpleGrid>
  );
};
