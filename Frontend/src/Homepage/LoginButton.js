import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { Login } from './Login';

export const LoginButton = ({setrandom}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  

  return (
    <div>
        <button onClick={onOpen}>LOGIN</button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Login onClose={onClose} setrandom={setrandom}/>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
