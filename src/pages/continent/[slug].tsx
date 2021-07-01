import {
    Box,
    Flex,
    Icon, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, SimpleGrid, Text, VStack
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { RiInformationLine } from "react-icons/ri";
import { ImSigma } from "react-icons/im";

import BigNumber from "../../components/BigNumber";
import { Cover } from "../../components/Cover";
import { Header } from "../../components/Header";
import { ListCard } from "../../components/ListCard";
import { PopoverContentList } from "../../components/Popover/PopoverContentList";

import { api } from "../../services/api";

interface WpFcTop100Cities19 {
    ranking: number;
    city: string;
    country: string;
    arrivals_mm: number;
    growth_perc_year: number;
    rank_movement_2018_2019: number;
    city_pt_br: string;
    country_pt_br: string;
    continentId: number;
    image_city: string;
    image_country_flag: string;
}

interface Continent {
    id: number;
    uid: string;
    title: string;
    subtitle: string;
    description: string;
    image_cover: string;
    amount_countries: number;
    amount_languages: number;
    stats_languages: {
        institutional: number;
        developing: number;
        vigorous: number;
        in_trouble: number;
        dying: number;
    };
    wpFcTop100Cities19: WpFcTop100Cities19[]
}

interface ContinentProps {
    continent: Continent
}

type SummaryCities = CountryCitiesAmount & {
    total: number;
}

interface CountryCitiesAmount {
    [key: string]: {
        country: string;
        total_cities: number;
        total_arrivals_mm: number;
    }
}
export default function Continent({ continent }: ContinentProps) {

    const summary = continent?.wpFcTop100Cities19.reduce((acc, city) => {
        if(!acc[city.image_country_flag]) {
            acc[city.image_country_flag] = { 
                country: city.country_pt_br, 
                total_cities: 0,
                total_arrivals_mm: 0
            };
        }

        acc[city.image_country_flag].total_arrivals_mm += city.arrivals_mm;
        acc[city.image_country_flag].total_cities += 1;

        acc.total += city.arrivals_mm; 

        return acc;
    }, {
        total: 0
    } as SummaryCities);

    const [totalArrivals, ...countriesRank] = summary && Object.values(summary) || [];

    const orderedRankingCountries = countriesRank.sort((a, b) => 
        a.total_arrivals_mm > b.total_arrivals_mm ? - 1 : Number(a.total_arrivals_mm < b.total_arrivals_mm)
    );

    return (
        <Flex
            direction="column"
        >
            <Header
                backButton={true}
            />

            <Cover 
                title={continent?.title} 
                image={continent?.image_cover}
            />

            <Flex 
                direction="column"
                w="100%"
                maxW={1440}
                my={[
                    "3", 
                    "6"
                ]}
                mx="auto"
                px={[
                    "0", 
                    "6"
                ]}
            >
                <SimpleGrid 
                    mt="60px"
                    columns={2}
                >
                    <Box
                        fontSize="1.2rem"
                        fontWeight="400"
                        lineHeight="32px"
                        textAlign="justify"
                        w="100%"
                        pl={[
                            "120px", 
                            "120px", 
                            "120px", 
                            "120px", 
                            "120px", 
                            "0px"
                        ]}
                        pr={["16px", "16px", "16px", "2px"]}
                        m="auto"
                    >
                        { continent?.description }
                    </Box>
                    <SimpleGrid 
                        columns={3}
                        w="100%"
                        alignItems="center"
                        pl="92px"
                        pr="92px"
                    >
                        <BigNumber
                            numberHighlight={continent?.amount_countries}
                            description="países"
                        />

                        <BigNumber
                            numberHighlight={continent?.amount_languages}
                            description="línguas"
                        >
                            <Popover>
                                <PopoverTrigger>
                                    <Box
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Info Languages"
                                    >
                                        <Icon 
                                            as={ RiInformationLine } 
                                            color="gray.450" 
                                            fontSize="14px" 
                                            ml="4px"
                                        />
                                    </Box>
                                </PopoverTrigger>
                                <PopoverContent
                                    w="15rem"
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
                                    >Idiomas por status</PopoverHeader>
                                    <PopoverBody
                                        fontSize="12px"
                                    >
                                        <VStack>

                                            <PopoverContentList 
                                                title="Institucional"
                                                value={continent?.stats_languages.institutional}
                                                colorBullet="pink.700"
                                            />

                                            <PopoverContentList 
                                                title="Em desenvolvimento"
                                                value={continent?.stats_languages.developing}
                                                colorBullet="purple.700"
                                            />

                                            <PopoverContentList 
                                                title="Em vigor"
                                                value={continent?.stats_languages.vigorous}
                                                colorBullet="green.700"
                                            />

                                            <PopoverContentList 
                                                title="Com problemas"
                                                value={continent?.stats_languages.in_trouble}
                                                colorBullet="yellow.700"
                                            />

                                            <PopoverContentList 
                                                title="Morrendo"
                                                value={continent?.stats_languages.dying}
                                                colorBullet="red.700"
                                            />

                                        </VStack>
                                    </PopoverBody>
                                    <PopoverFooter
                                        fontSize="0.65rem"
                                        fontWeight="400"
                                        textAlign="right"
                                    >
                                        Fonte: <Link href="https://www.ethnologue.com/" target="_blank">ethnologue</Link>
                                    </PopoverFooter>
                                </PopoverContent>
                            </Popover>
                        </BigNumber>

                        <BigNumber
                            numberHighlight={continent?.wpFcTop100Cities19.length}
                            description="cidades +100"
                        >
                            <Popover>
                                <PopoverTrigger>
                                    <Box
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Info Cities"
                                    >
                                        <Icon 
                                            as={ RiInformationLine } 
                                            color="gray.450" 
                                            fontSize="14px" 
                                            ml="4px" 
                                        />
                                    </Box>
                                </PopoverTrigger>
                                <PopoverContent
                                    w="22rem"
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
                                        + visitações por país

                                        <Flex
                                            pt="8px"
                                            justifyContent="space-between"
                                            fontSize="10px"
                                            fontWeight="400"
                                        >
                                            <Text>Ranking - País (Total de cidades)</Text>
                                            <Text>Total de visitações (mm)</Text>
                                        </Flex>
                                    </PopoverHeader>
                                    <PopoverBody
                                        fontSize="12px"
                                    >
                                        <VStack>

                                            { orderedRankingCountries.map((summary, i) => (
                                                <PopoverContentList 
                                                    title={`${i + 1} - ${summary.country} (${summary.total_cities})`}   
                                                    value={Number(summary.total_arrivals_mm).toFixed(1)}
                                                />
                                            ))}

                                            <Flex
                                                justifyContent="flex-end"
                                                w="100%"
                                            >
                                                <Icon 
                                                    as={ ImSigma }
                                                    mr="5px"
                                                    color="yellow.50"
                                                    w="10px"
                                                    h="15px"
                                                />
                                                <Text>{Number(totalArrivals).toFixed(1)}</Text>
                                            </Flex>

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
                        </BigNumber>
                        
                    </SimpleGrid>
                </SimpleGrid>

                <Box 
                    mt="70px"
                    pl={[
                        "120px", 
                        "120px", 
                        "120px", 
                        "120px", 
                        "120px", 
                        "0px"
                    ]}
                >
                    <Text
                        fontSize="2rem"
                        fontWeight="500"
                    >
                        Cidades +100
                    </Text>
                    
                    <ListCard
                        listCards={continent?.wpFcTop100Cities19}
                    />

                </Box>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const paths = [];    
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async({
    params
}) => {
    const { slug } = params;
    let continent = await api.get<ContinentProps[]>(`continents?uid=${slug}&_embed=wpFcTop100Cities19`).then(response =>{
        return response.data[0];        
    });
    
    return {
        props: {
            continent,
        },
        redirect: 60 * 60 * 24, // 24 hours
    }
}