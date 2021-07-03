import { Flex, Link, Text, Image, Box, Tag, TagLeftIcon, TagLabel, useDisclosure, useBreakpointValue } from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri"; 
import { Modal } from "../Modal";

export function Research() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    const sizeModal = useBreakpointValue({
        xs: 'xs',
        sm: 'md',
        base: '2xl',
        md: "2xl",
        lg: "2xl",
        xl: "2xl"
    });

    return (
        <Flex
            mt={[
                "0px",
                "12px",
                "38px",
                "78px"
            ]}
            mb={[
                "0px",
                "0px",
                "0px",
                "24px"
            ]}
            p={[
                "6"
            ]}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            w="100%"
        >
            <Box
                maxW="480px"
                color="gray.600"
                fontSize={[
                    "0.85rem",
                    "1rem",
                ]}
                fontWeight="400"
                lineHeight={[
                    "22px",
                    "26px",
                    "26px",
                    "26px",
                    "26px"
                ]}
                textAlign="justify"
            >
                Esse site é baseado na pesquisa <Text as="span" fontWeight="600">"Top 100 cidades destinos - Edição 2019"</Text> da empresa
                <Link 
                    href="https://www.euromonitor.com/" 
                    target="_blank"
                    color="linkedin.500"
                > Euromonitor International</Link>.

                <Box 
                    textAlign={isWideVersion ? 'right' : 'center'}
                    pt={[
                        "8px",
                        "auto"
                    ]}
                >
                    <Tag 
                        role="button"
                        mt="6px"
                        fontSize="0.80rem"
                        size="lg"
                        variant="outline"
                        colorScheme="linkedin"
                        onClick={onOpen}
                    >
                        <TagLeftIcon 
                            boxSize="16px" 
                            as={ RiInformationLine } 
                        />
                        <TagLabel>Detalhes da metodologia</TagLabel>
                    </Tag>

                    <Modal
                        size={sizeModal}
                        header="Metodologia e Definições"
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <Box
                            textAlign="justify"
                            fontSize="14px"
                            fontWeight="400"
                        >
                            A pesquisa de visitações de cidades da Euromonitor International cobre mais de 400 cidades. O relatório destaca as principais 100 cidades com base nas visitas internacionais de 2018. As visitas internacionais por cidade incluem visitantes do exterior que chegam à cidade em análise como seu primeiro ponto de entrada, incluindo também os visitantes da cidade que chegou ao país por um ponto de entrada diferente, mas depois passou a visitar a cidade em questão durante a sua viagem. Visitações é a definição para turistas internacionais, ou seja, qualquer pessoa que visite outro país por pelo menos 24 horas, por um período não superior a 12 meses, e permanência em alojamento remunerado ou não, coletivo ou particular. Cada chegada é contada separadamente e inclui pessoas que viajam mais de uma vez por ano e pessoas que visitam várias cidades durante uma viagem. As chegadas englobam todos os fins de visita, como negócios, lazer e visita a amigos e parentes. As visitas excluem visitantes domésticos, visitantes do mesmo dia, pessoas em trânsito e passageiros de cruzeiros, pois isso pode distorcer os números de visitas em importantes passagens de fronteira e destinos de cruzeiros, respectivamente. Também exclui aqueles com emprego remunerado no exterior. Alunos que ficam em um país por um período de mais de 12 meses estão excluídos e são considerados residentes temporários. Militares e a tripulação de transporte são excluídos, junto com pessoas deslocadas por causa de guerras ou desastres naturais. O ranking foca na cidade centros e tende a excluir praias e resorts de esqui que podem receber grandes volumes de visitantes internacionais. O documento oficial fornece dados de chegadas de 2017, 2018 e previsão de 2019, bem como a classificação movimentos. No documento, o movimento na classificação de "2013–18" indica a mudança na classificação entre 2013 e 2018 de cada cidade com base nas chegadas em 2013 e 2018. O movimento na classificação 2018-19, apresentado nesse site, indica a mudança na classificação entre 2018 e 2019, onde os dados de 2019 são um número estimado de visitas com base em dados de parte do ano. As cidades incluídas no ranking atual das 100 melhores pode não ter estado ou não estar no ranking em 2013 ou 2018.

                            <Text>Esse site irá trabalhar com os dados da <strong>previsão de 2019</strong>, mencionado acima. Para acessar o documento oficial com todas as informações que nós nos baseamos você deve acessar o site 
                                <Link 
                                    href="https://www.euromonitor.com/" 
                                    target="_blank"
                                    color="linkedin.500"
                                > Euromonitor International</Link>.
                            </Text>
                        </Box>
                    </Modal>
                </Box>
            </Box>

            <Box>
                <Image
                    mt={[
                        "28px",
                        "38px",
                        "48px",
                        "auto"
                    ]}
                    ml={[
                        "0px",
                        "0px",
                        "0px",
                        "48px"
                    ]}
                    w={[
                        "240px",
                        "300px"
                    ]}
                    objectFit="contain"
                    src="/images/logoEuromonitor.png"
                    alt="Logo Euromonitor Internation"
                />
            </Box>
        </Flex>
    )
}