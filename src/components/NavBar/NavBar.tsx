import { LuBookMinus } from "react-icons/lu";
import ToggleDarkMode from "./ToggleDarkMode/ToggleDarkMode";
import { Flex, Text, Icon, useColorMode } from "@chakra-ui/react";
import SelectFont from "./SelectFont/SelectFont";

export default function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <Flex justifyContent={"space-between"} mb={10}>
      <Icon
        as={LuBookMinus}
        boxSize={"30px"}
        color={colorMode === "dark" ? "white " : "gray.400"}
      />
      <Flex alignItems={"center"}>
        <Flex gap={3} alignItems={"center"}>
          <SelectFont />
          <Text color="gray.200">|</Text>

          <ToggleDarkMode />
        </Flex>
      </Flex>
    </Flex>
  );
}
