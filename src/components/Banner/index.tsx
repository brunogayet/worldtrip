import { Box, Flex, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false
    })

    return (
        <Flex
            w="100%"
            h={[
                "200px",
                "335px"
            ]}
            bg="url('/images/background.svg') no-repeat"
            bgSize="cover"
            alignItems="center"
        >
            <Box w={["100%", "50%"]}>

                <Stack
                    spacing={5} 
                    w={["auto", "50%"]}
                    mx={["4", "auto"]}
                    py={["8", "auto"]}
                >                
                    <Heading
                        as="h2"
                        w={[
                            "16rem", 
                            "22rem", 
                            "28rem", 
                            "24rem", 
                            "27rem"
                        ]}
                        color="gray.50"
                        fontSize={[
                            "1.25rem", 
                            "1.75rem", 
                            "2.25rem"
                        ]}
                        fontWeight="500"
                        lineHeight={[
                            "1.75rem", 
                            "2.5rem", 
                            "3.375rem"
                        ]}
                    >
                        5 Continentes,
                        <Text>infinitas possibilidades.</Text>
                    </Heading>

                    <Box
                        w={[
                            "22rem", 
                            "24rem", 
                            "34rem", 
                            "28rem", 
                            "36rem"
                        ]}
                        color="gray.200"
                        fontSize={[
                            "0.875rem", 
                            "1rem", 
                            "1.25rem"
                        ]}
                        fontWeight="400"
                        lineHeight={[
                            "1.31rem", 
                            "1.25rem", 
                            "1.875rem"
                        ]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Box>
                </Stack>
                
            </Box>
            
            
            { !isMobileVersion && (
                <Box w="50%">
                    <Image
                        mx="auto"
                        mt={[
                            "250px", 
                            "108px"
                        ]}
                        src="/images/airplane.svg"
                        alt="Airplane"
                    />
                </Box>
            )}
        </Flex>
    )
}