import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";

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
            h="500px"
            bg={`url(${image}) center no-repeat`}
            bgSize="cover"
            alignItems="center"
        >
            <Box
                bgColor="rgba(28, 20, 1, 0.35)"
                position="relative"
                w="100%"
                h="100%"
                pt="369px"
                pl="140px"
                color="gray.50"
                fontSize={[
                    "3rem"
                ]}
                fontWeight="600"
            >
                { title }
            </Box>
        </Flex>
    )
}