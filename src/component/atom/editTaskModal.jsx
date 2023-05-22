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
import React from "react";
import { categories } from "../../config/data";

const EditTaskModal = ({ isOpen, onClose, handleEdit, task, setEditedTask,}) => {

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    
    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                justifyContent="center"
                borderRadius="20px"
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
                        Edit Task
                    </ModalHeader>
                    <ModalBody pb="20px">
                        <FormControl>
                            <Input
                                ref={initialRef}
                                name="title"
                                value={task.title}
                                onChange={(e) =>
                                    setEditedTask({
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
                                        py="auto"
                                        borderRadius="10px"
                                        onClick={() =>
                                            setEditedTask({
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
                            mr="10px"
                            color="#44A0A0"
                            fontWeight="800"
                            fontSize="15px"
                            lineHeight="20px"
                            colorScheme="blue"
                            borderRadius="8px"
                            border="none"
                            onClick={() => handleEdit(task)}
                        >
                            Submit
                        </Button>
                        <Button
                            borderRadius="8px"
                            color="#FF5252"
                            fontWeight="800"
                            fontSize="15px"
                            lineHeight="20px"
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

export default EditTaskModal;
