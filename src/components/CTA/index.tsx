import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Slider } from "../Slider";

import { api } from '../../services/api';

interface ContinentsProps {
    id: number;
    uid: string;
    title: string;
    subtitle: string;
    image_slider: string;
}

export function CTA() {

    const [continents, setContinents] = useState<ContinentsProps[]>([]);

    useEffect(() => {
        api.get<ContinentsProps[]>(`continents/`).then(response => {
            setContinents(response.data);
        })
    }, []);

    return (
        <>
            <Box 
                mx="auto" 
                mt={[
                    "32px",
                    "52px"
                ]}
            >
                <Heading
                    color="gray.600"
                    fontSize={[
                        "1.35rem", 
                        "1.85rem"
                    ]}
                    fontWeight="500"
                    align="center"
                    lineHeight={[
                        "30px",
                        "48px"
                    ]}
                >
                    <Text>Vamos nessa?</Text>
                    <Text>Então escolha seu continente</Text>
                </Heading>
            </Box>

            <Flex
                h={[
                    "250px", 
                    "450px"
                ]}
                mt={[
                    "36px", 
                    "52px"
                ]}
                mb="40px"
                >

                <Slider data={continents} />

            </Flex>
        </>
    )
}