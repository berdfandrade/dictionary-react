import { Box, Text, Flex, Divider, Link } from "@chakra-ui/react";
import WordHeading from "../WordHeading/Wordheading";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import PlayButton from "./PlayButton/PlayButton";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import SearchForAWordPage from "../SearchForAWordPage";

export default function WordSection({ words }) {
  if (words === undefined) {
    return <SearchForAWordPage />;
  }

  return (
    <>
      {words.map((word, wordIndex) => (
        <Box key={wordIndex}>
          <Flex justifyContent={"space-between"}>
            <Flex flexDir={"column"}>
              <WordHeading>{word.word}</WordHeading>
              <Text color="#a25dd6" mt={3} mb={3}>
                {word.phonetic}{" "}
              </Text>
            </Flex>
            {/* {word.phonetics && word.phonetics.length > 0 && (
              <PlayButton url={word.phonetics[0].audio} />
            )} */}
          </Flex>

          {word.meanings.map((meaning, index) => (
            <Flex key={index} flexDirection="column" mt={3}>
              <Flex gap={3} alignItems={"center"} flexDir="row">
                <Text as="b">{meaning.partOfSpeech}</Text>
                <Divider />
              </Flex>
              <Text mb={5} color={"gray.400"} mt={5}>
                Meaning
              </Text>
              {meaning.definitions.map((definition, idx) => (
                <Box key={idx} ml={[0, 3]}>
                  <UnorderedList styleType="none">
                    <ListItem>
                      <Flex flexDir="row" gap={2}>
                        <Text color="#b47ddf">•</Text>
                        <Text mb={3}>{definition.definition}</Text>
                      </Flex>
                    </ListItem>
                  </UnorderedList>

                  {definition.example && (
                    <Text>
                      <Text ml={7} mb={5} color="gray.400">
                        "{definition.example}"
                      </Text>
                    </Text>
                  )}
                </Box>
              ))}
            </Flex>
          ))}
        </Box>
      ))}
      <Divider mb={6}/>
      <Text>
        <Flex flexDir="row" gap={7}>
          <Text color='gray.400'>Source</Text>
          <Flex flexDir={'row'} alignItems={'center'}>
            <Link href={words[0].sourceUrls[0]} >
              {words[0].sourceUrls[0]}
            </Link>
            <ExternalLinkIcon ml={2} />
            </Flex>
        </Flex>
      </Text>
    </>
  );
}
