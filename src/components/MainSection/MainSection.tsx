import { Box, Flex } from "@chakra-ui/react";
import { useState } from 'react';
import Navbar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import WordSection from "./WordSection/WordSection";

export default function MainSection() {

    return (
        <Box p={10}>
            <Box maxW='700px' ml={'auto '} mr='auto' >
                <Flex flexDir={'column'} gap={5}>
                    <Navbar />
                    <SearchBar/> 
                    {/* <WordSection data={searchResults} /> */}
                </Flex>
            </Box>
        </Box>
    );
}