import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

interface Card {
    city: string;
    country: string;
    ranking: number;
    arrivals_mm: number;
    growth_perc_year: number;
    rank_movement_2018_2019: number;
    city_pt_br: string;
    country_pt_br: string;
    image_city: string;
    image_country_flag: string;
}

interface ListCardProps {
    listCards: Card[]
}

export function ListCard({ listCards }: ListCardProps) {
    return (
        <SimpleGrid
            flexDirection="row"
            columns={[
                1,
                1,
                2,
                3,
                4
            ]}
            pt={[
                "20px",
                "40px"
            ]}
            pb={[
                "20px",
                "40px"
            ]}
            px={[
                "40px",
                "auto"
            ]}
            gap={[
                "4", 
                "4",
                "4",
                "12",
                "12",
                "12"
            ]}
            rowGap={[
                "6",
                "12",
                "12",
                "16",
                "16",
                "16"
            ]}
            justifyContent="space-around"
            justifyItems="center"
            alignItems="baseline"
        >

            { listCards?.map((city, i) => (
                <Card 
                    key={i}
                    ranking={city.ranking}
                    city_pt_br={city.city_pt_br}
                    country_pt_br={city.country_pt_br}
                    image_city={city.image_city}
                    image_country_flag={city.image_country_flag}
                    arrivals_mm={city.arrivals_mm}
                    growth_perc_year={city.growth_perc_year}
                    rank_movement_2018_2019={city.rank_movement_2018_2019}
                />
            ))}
            
        </SimpleGrid>
    )
}