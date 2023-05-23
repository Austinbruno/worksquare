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
          justifySelf="center"
          w="600px"
          borderRadius="17px"
        >
          <ModalHeader fontSize="24px" fontWeight="700px" color="#fff">
            Create Task
          </ModalHeader>
          <>
            <ModalBody>
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
                  display="grid"
                  w="400px"
                  mx="auto"
                  bg="white"
                  fontWeight="400"
                  fontSize="20px"
                  borderRadius="8px"
                  border="none"
                />
              </FormControl>

              <Flex alignItems="center" mt="55px">
                <Box w="140px" h="1px" bg="#F6F6F6" />
                <Text mx="13px" fontSize="20px" fontWeight="600" color="#fff">
                  Categories
                </Text>
                <Box w="140px" h="1px" bg="#F6F6F6" />
              </Flex>

              <Grid gridTemplateColumns="repeat(2, 1fr)" mt="20px" gap="15px">
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
                color="white"
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
