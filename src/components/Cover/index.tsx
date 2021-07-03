import { Box, Flex, useBreakpointValue, Text } from "@chakra-ui/react";

interface CoverProps {
    title: string;
    image: string;
}

export function Cover({ title, image }: CoverProps) {
    
    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false
    })

    return (
        <Flex
            w="100%"
            h={[
                "200px",
                "350px",
                "500px"
            ]}
            bg={`url(${image}) center no-repeat`}
            bgSize="cover"
            alignItems="center"
        >
            <Box
                bgColor="rgba(28, 20, 1, 0.35)"
                position="relative"
                w="100%"
                h="100%"
                color="gray.50"
                fontSize={[
                    "1.75rem",
                    "3rem"
                ]}
                fontWeight="600"
            >
                <Box 
                    d="flex"
                    alignItems={[
                        "center",
                        "center",
                        "center",
                        "normal"
                    ]}
                    justifyContent={[
                        "center",
                        "center",
                        "center",
                        "normal"
                    ]}
                    pt={[
                        "auto",
                        "auto",
                        "auto",
                        "369px" 
                    ]}
                    px={[
                        "auto",
                        "auto",
                        "16px",
                        "140px",
                        "140px"
                    ]}    
                    maxWidth={1440} 
                    h="100%"
                    mx="auto"
                >
                    <Text>{ title }</Text>
                </Box>
            </Box>
        </Flex>
    )
}