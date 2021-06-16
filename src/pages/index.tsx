import { Flex, Box, Stack, Heading, Text, Image, Divider, Container } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Home() {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        h="335px"
        bg="url('/images/background.svg') no-repeat"
        bgSize="cover"
        alignItems="center"
      >
        <Box w="50%">

          <Stack 
            spacing={5} 
            w="50%"
            mx="auto"
          >
            
            <Heading
              as="h2"
              w={["12rem", "14rem", "22rem", "24rem", "27rem"]}
              color="gray.50"
              fontSize={["1.25rem", "1.75rem", "2.25rem"]}
              fontWeight="500"
              lineHeight={["1.75rem", "2.5rem", "3.375rem"]}
            >
              5 Continentes,
              <Text>infinitas possibilidades.</Text>
            </Heading>

            <Text
              w={["12rem", "14rem", "22rem", "24rem", "32rem"]}
              color="gray.200"
              fontSize={["0.75rem", "1rem", "1.25rem"]}
              fontWeight="400"
              lineHeight={["1rem", "1.25rem", "1.875rem"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Stack>
        
        </Box>
        
        <Box w="50%">
          <Image
            mx="auto"
            mt={["250px", "108px"]}
            src="/images/airplane.svg"
            alt="Airplane"
          />
        </Box>
      </Flex>

      <Flex 
        direction="column"
        w="100%"
        maxW={1480}
        my="6"
        mx="auto"
        px={["0", "6"]}
      >
        <Stack
          direction={["column", "row"]}
          spacing={[
            "80px", 
            "30px", 
            "80px", 
            "100px", 
            "130px", 
            "200px"
          ]}
          mt={["50px", "90px"]}
          flex="1"
          justifyContent="center"
          alignItems="center"
        >
          <Box align="center">
            <Image 
              src="/images/cocktail.svg"
            />
            <Text
              mt="24px"
              fontSize="1.25rem"
              fontWeight="600"
              color="gray.600"
            >vida noturna</Text>
          </Box>
          
          <Box align="center">
            <Image 
              src="/images/surf.svg"
            />
             <Text
              mt="24px"
              fontSize="1.25rem"
              fontWeight="600"
              color="gray.600"
            >praia</Text>
          </Box>
          
          <Box>
            <Image 
              src="/images/building.svg"
            />
             <Text
              mt="24px"
              fontSize="1.25rem"
              fontWeight="600"
              color="gray.600"
            >moderno</Text>
          </Box>
          
          <Box>
            <Image 
              src="/images/museum.svg"
            />
             <Text
              mt="24px"
              fontSize="1.25rem"
              fontWeight="600"
              color="gray.600"
            >clássico</Text>
          </Box>

          <Box>
            <Image 
              src="/images/earth.svg"
            />
             <Text
              mt="24px"
              fontSize="1.25rem"
              fontWeight="600"
              color="gray.600"
            >e mais...</Text>
          </Box>
        </Stack>

        <Divider
          mt="77px"
          mx="auto"
          w="90px"
          border="2px"
          borderColor="gray.600"
        />

        <Box 
          mx="auto" 
          mt="52px"
        >
          <Heading
            color="gray.600"
            fontSize="1.85rem"
            fontWeight="500"
            align="center"
            lineHeight="48px"
          >
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Heading>
        </Box>

        <Flex 
          h={["250px", "450px"]}
          mt={["36px", "52px"]}
          mb="40px"
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>

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
                  src="/images/europe.jpg"
                />

                <Box
                  fontWeight="700"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Text
                    color="gray.50"
                    fontSize={["24px", "48px"]}
                  >
                    Europa
                  </Text>
                  
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </Flex>

            </SwiperSlide>

            <SwiperSlide>
              
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
                  src="/images/asia.jpg"
                />
                
                <Box
                  fontWeight="700"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Text
                    color="gray.50"
                    fontSize={["24px", "48px"]}
                  >
                    Asia
                  </Text>
                  
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                  >
                    O maior dos continentes.
                  </Text>
                </Box>
              </Flex>

            </SwiperSlide>

            <SwiperSlide>

              <Flex
                position="relative"
                textAlign="center"
              >
                <Box 
                  id="lente"
                  bgColor="rgba(28, 20, 1, 0.55)"
                  position="absolute"
                  w="100%"
                  h="100%"
                />

                <Image 
                  src="/images/north-america.jpg"
                />
                <Box
                  fontWeight="700"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Text
                    color="gray.50"
                    fontSize={["24px", "48px"]}
                  >
                    América do Norte
                  </Text>
                  
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                  >
                    O segundo maior continente.
                  </Text>
                </Box>
              </Flex>

            </SwiperSlide>

            <SwiperSlide>

              <Flex
                position="relative"
                textAlign="center"
              >
                <Box 
                  id="lente"
                  bgColor="rgba(28, 20, 1, 0.55)"
                  position="absolute"
                  w="100%"
                  h="100%"
                />

                <Image 
                  src="/images/south-america.jpg"
                />
                <Box
                  fontWeight="700"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Text
                    color="gray.50"
                    fontSize={["24px", "48px"]}
                  >
                    América do Sul
                  </Text>
                  
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                  >
                    Onde o Espanhol e Português reinam.
                  </Text>
                </Box>
              </Flex>

            </SwiperSlide>

            <SwiperSlide>

              <Flex
                position="relative"
                textAlign="center"
              >
                <Box 
                  id="lente"
                  bgColor="rgba(28, 20, 1, 0.55)"
                  position="absolute"
                  w="100%"
                  h="100%"
                />

                <Image 
                  src="/images/africa.jpg"
                />
                <Box
                  fontWeight="700"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Text
                    color="gray.50"
                    fontSize={["24px", "48px"]}
                  >
                    África
                  </Text>
                  
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                  >
                    O segundo continente mais populoso.
                  </Text>
                </Box>
              </Flex>

            </SwiperSlide>

            <SwiperSlide>

              <Flex
                position="relative"
                textAlign="center"
              >
                <Box 
                  id="lente"
                  bgColor="rgba(28, 20, 1, 0.55)"
                  position="absolute"
                  w="100%"
                  h="100%"
                />
                
                <Image 
                  src="/images/oceania.jpg"
                />
                <Box
                  fontWeight="700"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Text
                    color="gray.50"
                    fontSize={["24px", "48px"]}
                  >
                    Oceania
                  </Text>
                  
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                  >
                    O menor e mais novo continente.
                  </Text>
                </Box>
              </Flex>

            </SwiperSlide>

          </Swiper>
        </Flex>

      </Flex>
    </Flex>
  )
}
