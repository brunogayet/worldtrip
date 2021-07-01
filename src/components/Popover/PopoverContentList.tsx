import { Circle, Flex, HStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface PopoverContentListProps {
    title: string;
    value: string | number | ReactElement;
    colorBullet?: string;
}

export function PopoverContentList({ title, value, colorBullet=null }: PopoverContentListProps) {
    return (
        <Flex                                                        
            alignItems="baseline"
            justifyContent="space-between"
            w="100%"
        >
            <HStack>
                { colorBullet && (
                    <Circle 
                        size="10px" 
                        bg={colorBullet} 
                    />
                )}

                <Text 
                    fontSize="12px"
                    fontWeight="400"
                >
                    { title }
                </Text>
            </HStack>
            <Text
                fontSize="12px"
                fontWeight="600"
            >{ value }</Text>
        </Flex>
    )
}