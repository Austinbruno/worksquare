import {
    Box,
    Button,
    Flex,
    FormControl,
    Grid,
    GridItem,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { categories } from "../../config/data";

const AddTaskModal = ({ isOpen, onClose, handleSubmit }) => {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [task, setTask] = useState({
        title: "",
        category: "",
        color: "",
    });
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
                    mt="227px"
                    justifySelf="center"
                    w="500px"
                    h="450px"
                    mx="auto"
                    borderRadius="17px"
                >
                    <ModalHeader
                        fontSize="24px"
                        fontWeight="700px"
                        mt="30px"
                        color="#fff"
                    >
                        Create Task
                    </ModalHeader>
                    <>
                        <ModalBody pb="20px">
                            <FormControl>
                                <Input
                                    ref={initialRef}
                                    onChange={(e) =>
                                        setTask({
                                            ...task,
                                            title: e.target.value,
                                        })
                                    }
                                    placeholder="Task description..."
                                    w="401.74px"
                                    h="40px"
                                    pl="10px"
                                    my="18px"
                                    mx="40px"
                                    fontWeight="400"
                                    fontSize="20px"
                                    borderRadius="8px"
                                    border="none"
                                />
                            </FormControl>
                            <Flex alignItems="center" mt="5px">
                                <Box w="180px" h="1px" bg="#F6F6F6" />
                                <Text
                                    mx="13px"
                                    fontSize="20px"
                                    fontWeight="600"
                                    color="#fff"
                                >
                                    Categories
                                </Text>
                                <Box w="190px" h="1px" bg="#F6F6F6" />
                            </Flex>
                            <Grid
                                gridTemplateColumns="repeat(2, 1fr)"
                                gap={10}
                                mx="30px"
                            >
                                {categories.map((category, index) => (
                                    <GridItem key={index}>
                                        <Box
                                           
                                            bg={category.color}
                                            h="30px"
                                            mx="auto"
                                            borderRadius="10px"
                                            onClick={() =>
                                                setTask({
                                                    ...task,
                                                    category: category.name,
                                                    color: category.color,
                                                })
                                            }
                                            mb="10px"
                                            color="#fff"
                                            alignContent="center"
                                            textAlign="center"
                                            fontSize="20px"
                                            cursor="pointer"
                                            lineHeight="27px"
                                            fontWeight="400"
                                        >
                                            {category.name}
                                        </Box>
                                    </GridItem>
                                ))}
                            </Grid>
                        </ModalBody>
                        <ModalFooter mt="20px">
                            <Button
                                p="10px 30px"
                                w="182px"
                                h="40px"
                                fontWeight="800"
                                fontSize="20px"
                                lineHeight="40px"
                                color="#44A0A0"
                                mb="26px"
                                mx="auto"
                                colorScheme="blue"
                                borderRadius="8px"
                                border="none"
                                onClick={() => handleSubmit(task)}
                            >
                                SUBMIT TASK
                            </Button>
                        </ModalFooter>{" "}
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddTaskModal;
