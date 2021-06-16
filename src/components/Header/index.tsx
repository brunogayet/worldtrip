import { Flex, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            h="100"
            mx="auto" 
            mt="1"
            align="center"
        > 
            <Image 
                src="/images/logo.svg" 
                alt="Logotipo" 
                mx="auto"
                w={["164px", "184px"]}
                p="3"
            />
        </Flex>
    )
}