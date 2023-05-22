import {
    Box,
    Button,
    // FormControl,
    // FormLabel,
    // Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";

const DeleteTaskModal = ({ isOpen, onClose, handleDelete }) => {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [task] = useState("");
    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                justifyContent="center"
            >
                <ModalOverlay
                    bg="#00000080 50%"
                    backdropFilter="auto"
                    backdropInvert="0%"
                    backdropBlur="2px"
                />
                <ModalContent
                    bg="#354259"
                    alignItems="center"
                    mt="287px"
                    justifySelf="center"
                    w="500px"
                    h="250px"
                    mx="auto"
                    borderRadius="17px"
                >
                    <ModalHeader
                        fontSize="24px"
                        fontWeight="700px"
                        mt="30px"
                        color="#fff"
                    >
                        Delete Task
                    </ModalHeader>
                    <ModalBody pb="20px">
                        {/* <FormControl>
                <FormLabel my="20px" color="#fff" fontWeight="400">
                    Name Of Task
                </FormLabel>
                <Input
                    ref={initialRef}
                    onChange={(e) =(e.target.value)}
                    placeholder="name"
                    w="230px"
                    h="30px"
                    pl="10px"
                    borderRadius="8px"
                    border="none"
                />
            </FormControl> */}
                        
            <Box
              borderRadius="50px"
              border="1px double #B8F7BC"
              mt="20px"
              w="100px"
              h="100px"
              position="relative"
              ml="70px"
            >
              <CheckIcon w="100px" h="100px" color="#B8F7BC" px="20px" position="absolute" />
            </Box>
            <Text fontSize="20px" fontWeight="800" ml="60px" mt="30px">
              Verify Script
            </Text>
            <Text mt="30px">You will not be able to revert this!!!</Text>
                    </ModalBody>

                    <ModalFooter mt="20px">
                        <Button
                            p="10px 30px"
                            mr="10px"
                            colorScheme="blue"
                            borderRadius="8px"
                            border="none"
                            onClick={() => handleDelete(task)}
                        >
                            Submit
                        </Button>
                        <Button
                            borderRadius="8px"
                            p="10px 30px"
                            border="none"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DeleteTaskModal;
