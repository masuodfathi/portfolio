import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    
      <VStack bg='white' color="black" borderRadius={10}>
        <Image src={imageSrc} borderRadius={10}/>
        <VStack p={7} alignItems="left">
          <Heading size="md">{title}</Heading>
          <Text color="#4A5568"> {description}</Text>
          <Text paddingTop="10px">See more <FontAwesomeIcon icon={faArrowRight} size="sm" p={2}/></Text>
        </VStack>
      </VStack>
   
  );
};

export default Card;
