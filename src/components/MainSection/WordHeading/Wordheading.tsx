import {Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface IWordHeading {
    children : ReactNode; 
}

export default function WordHeading ({children} : IWordHeading) {
    
    return (
        <Text  fontSize={[35, 50]}>
            {children}
        </Text>
    )
}