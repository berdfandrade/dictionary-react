import { Box, Icon, Text, Flex, Center, useColorMode } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";

export default function SearchForAWordPage() {
  const { colorMode } = useColorMode();
  return (
    <Box mt={50} h={"100%"}>
      <Center>
        <Flex flexDir={"column"} gap={10}>
          <Icon
            mr={"auto"}
            ml={"auto"}
            boxSize={"100px"}
            as={FaBook}
            color={colorMode === "dark" ? "gray.900" : "gray.300"}
          ></Icon>
          <Text
            fontSize="20px"
            color={colorMode === "dark" ? "gray.900" : "gray.300"}
          >
            Search for a word....
          </Text>
        </Flex>
      </Center>
    </Box>
  );
}
