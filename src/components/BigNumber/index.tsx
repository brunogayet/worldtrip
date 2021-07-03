import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface BigNumberProps {
    numberHighlight: number;
    description: string;
    children?: ReactElement
}

export default function BigNumber({ numberHighlight, description, children }: BigNumberProps) {
    return (
        <VStack 
            h="100%" 
            justifyContent="center"
            alignItems={[
                "baseline",
                "center"
            ]}
        >
            <Box
                color="yellow.50"
                fontSize={[
                    "1.75rem",
                    "3rem"
                ]}
                fontWeight="600"
                lineHeight="32px"
            >
                { numberHighlight }
            </Box>
            <Flex
                color="gray.600"
                fontSize={[
                    "0.875rem",
                    "1.35rem"
                ]}
                fontWeight={[
                    "400",
                    "600"
                ]}
                alignItems="center"
            >
                <Text>{ description }</Text>

                { children }
                
            </Flex>
        </VStack>
    );
}