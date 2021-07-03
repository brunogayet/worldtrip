import {
    Modal as ModalChakra,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from "@chakra-ui/react"

import { ReactElement } from "react"

interface ModalProps {
    size: string;   
    header: string | ReactElement;
    footer?: ReactElement;
    isOpen: boolean;
    onClose: () => void;
    children: string | ReactElement
}

export function Modal({
    size,
    header,
    footer = null,
    isOpen,
    onClose,
    children
}: ModalProps) {

    return (
        <ModalChakra 
            isOpen={isOpen} 
            onClose={onClose} 
            size={size}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                { header }
            </ModalHeader>
            <ModalCloseButton
                _focus={{
                    outline: 'none'
                }}
            />
            <ModalBody
                pl="36px"
                pr="36px"
                pb="36px"
            >
                { children }
            </ModalBody>

            { footer && (
                <ModalFooter>
                    { footer }
                </ModalFooter>
            )}
            </ModalContent>
        </ModalChakra>
    )
}