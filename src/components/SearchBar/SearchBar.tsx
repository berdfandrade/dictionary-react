import { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Icon,
  useColorMode,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import WordSection from '../MainSection/WordSection/WordSection';


export default function SearchBar() {
  const { colorMode } = useColorMode();
  const [data, setData] = useState() 
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`
      );
      
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <div>
      <InputGroup>
        <Input
          focusBorderColor='none'
          placeholder={'search word...'}
          mb={2}
          bg={colorMode === 'dark' ? '#1f1f1f' : '#f5f5f5'}
          value={query}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <InputRightElement>
          <Icon
            as={FaSearch}
            color={colorMode === 'dark' ? '#9000ff' : 'gray.400'}
            mr={3}
            cursor="pointer"
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
    </div>
    <WordSection words={data}/>
    </>
  );
}