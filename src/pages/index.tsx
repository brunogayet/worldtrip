import { Divider, Flex, Text, Image, Link } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { CTA } from '../components/CTA'
import { Header } from '../components/Header'
import { Research } from '../components/Research'
import { Section } from '../components/Secao'


export default function Home() {

  return (
    <Flex
      direction="column"
    >
      <Header />
      
      <Banner />

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
        
        <Research />

        <Section />

        <Divider
          mt={[
            "36px",
            "77px"
          ]}
          mx="auto"
          w={[
            "60px",
            "90px"
          ]}
          border={[
            "1px",
            "2px"
          ]}
          borderColor="gray.600"
        />

        <CTA />

      </Flex>
    </Flex>
  )
}
