import { Box, Select, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function SelectFont() {
  return (
    <Select
      icon={<IoIosArrowDown color='red'/>}
     w='70px'
      variant={"unstyled"}
    //   border={"1px solid black"}
      _hover={{ "cursor ": "pointer" }}
    >

    <option>Serif</option>
    <option>Sans Serif</option>
    </Select>
  );
}
