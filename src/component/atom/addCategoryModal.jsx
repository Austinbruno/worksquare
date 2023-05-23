import {
  Box,
  Button,
  FormControl,
  FormLabel,
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
import { colors } from "../../config/data";

const AddCategoryModal = ({ isOpen, onClose, handleSubmit }) => {
  const [color, setColor] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [input, setInput] = useState("");

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
          justifySelf="center"
          w="500px"
          mx="auto"
          borderRadius="17px"
        >
          <ModalHeader fontSize="24px" fontWeight="800px" color="#fff">
            Add Category
          </ModalHeader>
          <ModalBody px="200px">
            <FormControl>
              <FormLabel color="#fff" fontSize="20px" fontWeight="800">
                Title
              </FormLabel>

              <Input
                ref={initialRef}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Title"
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
            <FormControl>
              <FormLabel
                my="20px"
                color="#fff"
                fontSize="20px"
                fontWeight="800"
              >
                Color
              </FormLabel>
              <Grid gridTemplateColumns="repeat(2, 1fr)" gap="10px">
                {colors.map((color, index) => (
                  <GridItem key={index}>
                    <Box
                      bg={color}
                      h="30px"
                      mx="auto"
                      borderRadius="10px"
                      onClick={(e) => setColor(color)}
                      color="#fff"
                      alignContent="center"
                      textAlign="center"
                      fontSize="20px"
                      cursor="pointer"
                      lineHeight="27px"
                      fontWeight="400"
                    >
                      <Text fontSize="15px" fontWeight="400">
                        Select
                      </Text>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </FormControl>
          </ModalBody>

          <ModalFooter mt="10px">
            <Button
              p="10px 30px"
              mr="10px"
              color="white"
              fontWeight="800"
              fontSize="15px"
              lineHeight="20px"
              colorScheme="blue"
              borderRadius="8px"
              border="none"
              onClick={() => handleSubmit(input, color)}
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

export default AddCategoryModal;
