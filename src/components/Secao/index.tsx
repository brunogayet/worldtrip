import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { SectionItem } from "./SectionItem";


interface SectionProps {
    title: string;
    image: string;
}

export function Section() {

    const [sections, setSections] = useState<SectionProps[]>([]);

    useEffect(() => {
        api.get<SectionProps[]>(`sections/`).then(response =>{
            setSections(response.data);
        })
    }, []);
    
    return (
        <Flex
            direction={["row"]}
            mt={[
                "0px",
                "50px", 
                "90px"
            ]}
            flex="1"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
        >
            { 
                //Getting the first 4 elements
                sections.slice(0,4)?.map((section, i) => (
                    <SectionItem key={i} title={section.title} image={section.image} />
                ))
            }

            { 
                // Show "more..." icon when items amount is greater than 4
                sections.length > 4 && (
                    <SectionItem title="e mais..." image="/images/earth.svg" />
                )
            }       
        </Flex>
    )
}