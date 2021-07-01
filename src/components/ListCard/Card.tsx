import { 
    Box, 
    Flex, 
    Image, 
    Text, 
    Icon, 
    Heading, 
    Popover, 
    PopoverArrow, 
    PopoverBody, 
    PopoverCloseButton, 
    PopoverContent, 
    PopoverFooter, 
    PopoverHeader, 
    PopoverTrigger, 
    VStack,
    Link
} from "@chakra-ui/react";

import React from "react";
import { FaMedal } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { PopoverContentList } from "../Popover/PopoverContentList";

interface CardProps {
    city?: string;
    country?: string;
    ranking: number;
    arrivals_mm?: number;
    growth_perc_year?: number;
    rank_movement_2018_2019?: number;
    city_pt_br: string;
    country_pt_br: string;
    image_city: string;
    image_country_flag: string;
}

export function Card({
    city_pt_br, 
    country_pt_br, 
    ranking,
    image_city,
    image_country_flag,
    arrivals_mm,
    growth_perc_year,
    rank_movement_2018_2019
}: CardProps) {
    return (
        <Box
            maxW="256px" 
            borderRadius="lg" 
            overflow="hidden"
        >
            <Image
                boxSize="256px"
                h="179px"
                objectFit="cover"                
                src={image_city} 
                alt="Image city" 
            />

            <Popover placement="left">
                <PopoverTrigger>
                    <Box
                        tabIndex={0}
                        role="button"
                        aria-label="Info Cities"
                    >
                     <Box 
                        role="button"
                        p="6" 
                        borderWidth="1px"
                        borderColor="rgba(255, 186, 8, 0.5)"
                        borderTop="0px"
                        borderBottomLeftRadius="lg"
                        borderBottomRightRadius="lg"
                    >
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box>
                            
                                <Flex 
                                    alignItems="center"
                                    pb="4px"
                                >
                                    <Icon 
                                        as={FaMedal} 
                                        w="16px"
                                        h="16px"
                                        mr="4px"
                                        color="teal"
                                    />
                                    <Text
                                        fontSize="12px"
                                        fontWeight="400" 
                                    >
                                        { ranking }º
                                    </Text>
                                </Flex>

                                <Heading
                                    pb="12px"
                                    fontFamily="Barlow"
                                    fontSize="1.25rem"
                                    fontWeight="600"
                                    lineHeight="25px"
                                >
                                    { city_pt_br }
                                </Heading>
                                
                                <Text
                                    color="gray.450"
                                    fontFamily="Barlow"
                                    fontSize="1rem"
                                    fontWeight="500"
                                    lineHeight="26px"
                                >
                                    { country_pt_br }
                                </Text>
                            </Box>

                            <Box>
                                <Image 
                                    borderRadius="full"
                                    boxSize="30px"
                                    src={image_country_flag} 
                                    alt="Country Flag" 
                                />
                            </Box>
                        </Flex>
                    </Box>   
                    </Box>
                </PopoverTrigger>
                <PopoverContent
                    w="16rem"
                    _focus={{
                        outline: 'none'
                    }}
                >
                    <PopoverArrow />
                    <PopoverCloseButton
                        _focus={{
                            outline: 'none'
                        }}
                    />
                    <PopoverHeader
                        fontSize="14px"
                        fontWeight="600"
                    >
                        <Text>
                            <Icon
                                as={ IoIosAirplane }                                
                                w="22px"
                                h="22px"
                                mr="2px"
                            />
                            Detalhes
                        </Text>
                    </PopoverHeader>
                    <PopoverBody
                        fontSize="12px"
                    >
                        <VStack>

                            <PopoverContentList 
                                title="Ranking"
                                value={`${ranking}º`}
                            />

                            <PopoverContentList 
                                title="Visitações (mm)"
                                value={arrivals_mm}
                            />

                            <PopoverContentList 
                                title="Crescimento ano (%)"
                                value={(
                                    <Box>
                                        { growth_perc_year >= 0 &&(
                                            <Icon 
                                                as={ RiArrowUpSFill }
                                                color="green.500"
                                                w="20px"
                                                h="20px"
                                            />
                                        )}

                                        { growth_perc_year < 0 &&(
                                            <Icon 
                                                as={ RiArrowDownSFill }
                                                color="red.500"
                                                w="20px"
                                                h="20px"
                                            />
                                        )}
                                        
                                        {growth_perc_year}
                                    </Box>
                                )}
                            />

                            <PopoverContentList 
                                title="Rank 2018-2019"
                                value={(
                                    <Box>
                                        { rank_movement_2018_2019 < 0 &&(
                                            <Icon 
                                                as={ RiArrowUpSFill }
                                                color="green.500"
                                                w="20px"
                                                h="20px"
                                            />
                                        )}

                                        { rank_movement_2018_2019 > 0 &&(
                                            <Icon 
                                                as={ RiArrowDownSFill }
                                                color="red.500"
                                                w="20px"
                                                h="20px"
                                            />
                                        )}
                                        
                                        {rank_movement_2018_2019}
                                    </Box>
                                )}
                            />
                        </VStack>

                    </PopoverBody>
                    <PopoverFooter
                        fontSize="0.65rem"
                        fontWeight="400"
                        textAlign="right"
                    >
                        <Text>Dados forecast 2019 - Fonte: <Link href="https://www.euromonitor.com/" target="_blank">Euromonitor</Link></Text>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </Box>
    )
}