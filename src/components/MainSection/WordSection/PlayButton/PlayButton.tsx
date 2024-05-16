import { Box, Icon, Flex, useColorMode } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function PlayButton({ url }) {
  const { colorMode } = useColorMode();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audio = new Audio(url);
    audio.play();
    setIsPlaying(true);
    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  return (
    <Box
      borderRadius={"100%"}
      boxSize={["50px", "60px"]}
      _hover={{ cursor: "pointer", transform: 'scale(1.1)' }}
      transition="transform 0.3s ease"
      bg={colorMode === 'dark' ? '#281637' : '#eccef9'}
      onClick={handlePlay}
    >
      <Flex alignItems={"center"} h={"100%"}>
        <Icon
          color={colorMode === 'dark' ? '#eccef9' : '#a04be0'}
          boxSize={"20px"}
          ml={"auto"}
          mr={"auto"}
          as={FaPlay}
        />
      </Flex>
    </Box>
  );
}