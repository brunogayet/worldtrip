import { Box, Image, Text, useBreakpointValue, List, ListItem, Icon } from "@chakra-ui/react";

interface SectionItemProps {
    title: string;
    image: string;
}

export function SectionItem({ title, image }: SectionItemProps) {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false
    });

    return (
        <Box 
            align="center" 
            mx={[
                "15px", 
                "30px", 
                "auto"
            ]}
        >
            { !isMobileVersion && (
                <>
                    <Image
                        src={image}
                    />
                    <Text
                        mt="24px"
                        fontSize="1.25rem"
                        fontWeight="600"
                        color="gray.600"
                    >
                        {title}
                    </Text>
                </>
            )}

            { isMobileVersion && (
                <List>
                    <ListItem
                        mt="24px"
                        fontSize="1.125rem"
                        fontWeight="500"
                        color="gray.600"
                    >
                        <Icon 
                            viewBox="0 0 200 200" 
                            w="12px"
                            color="yellow.50"
                            mr="14px"
                        >
                            <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                        </Icon>
                        {title}
                    </ListItem>
                </List>
            )}
        </Box>
    )
}