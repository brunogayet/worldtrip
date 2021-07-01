import Link from "next/link";

import { useRouter } from 'next/router';

import { Flex, Icon, IconButton, Image } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri';

interface HeaderProps {
    backButton?: boolean
}

export function Header({ backButton = false }: HeaderProps) {

    const router = useRouter();

    return (
        <Flex
            as="header"
            w="100%"
            h="100"
            mx="auto" 
            mt="1"
            align="center"
        > 
            { backButton && (
                <IconButton
                    aria-label="Back navigation"
                    icon={<Icon as={RiArrowLeftSLine} />}
                    fontSize="32"
                    variant="unstyled"
                    position="absolute"
                    top="30px"
                    left={[
                        "25px",
                        "70px",
                        "100px",
                        "140px"
                    ]}
                    _focus={{
                        outline: 'none'
                    }}
                    onClick={() => router.back()}
                ></IconButton>
            )}
            <Link href="/" passHref>
                <Image 
                    role="button"
                    src="/images/logo.svg" 
                    alt="Logotipo" 
                    mx="auto"
                    w={["115px", "164px", "184px"]}
                    p="3"
                />
            </Link>
        </Flex>
    )
}