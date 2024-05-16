import { useColorMode, Switch, Icon, Box, Flex } from "@chakra-ui/react";
import { FiMoon } from "react-icons/fi";

export default function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex alignItems="center" flexDir="row" gap={3}>
        <Switch
          size="sm"
          colorScheme="purple"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Icon
          as={FiMoon}
          color={colorMode === "dark" ? "#a743f2" : "gray.400"}
          boxSize="20px"
        />
      </Flex>
    </Box>
  );
}
