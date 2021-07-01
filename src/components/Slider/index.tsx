import Link from "next/link";

import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/core'
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])

interface SliderProps {
    id: number;
    uid: string;
    title: string;
    subtitle?: string;
    image_slider: string;
}

interface dataSliderProps {
    data: SliderProps[]
}

export function Slider({
    data
}: dataSliderProps) {

    return (

        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}                
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            {
                data.map(item => (

                    <SwiperSlide key={item.id}>
                        <Flex
                            position="relative"
                            textAlign="center"
                        >
                            <Box
                                id="lente"
                                bgColor="rgba(28, 20, 1, 0.35)"
                                position="absolute"
                                w="100%"
                                h="100%"
                            />

                            <Image
                                src={item.image_slider}
                            />
                            
                            <Link href={`/continent/${item.uid}`} passHref>
                                <Box
                                    as="a"
                                    fontWeight="700"
                                    position="absolute"
                                    top="50%"
                                    left="50%"
                                    transform="translate(-50%, -50%)"
                                >
                                    <Text
                                        color="gray.50"
                                        fontSize={[
                                            "24px", 
                                            "48px"
                                        ]}
                                    >
                                    {item.title}
                                    </Text>
                                                                        
                                    <Text
                                        color="gray.200"
                                        fontSize={[
                                            "14px", 
                                            "24px"
                                        ]}
                                    >
                                    {item.subtitle}
                                    </Text>
                                </Box>
                            </Link>
                        </Flex>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}