import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { categories } from "../../config/data";
import AddCategoryModal from "../atom/addCategoryModal";
// import { categories } from "../../config/data";
// import Category from "../atom/category";

const Categories = (props) => {
    const { onCategorySelect } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [allCategories, setAllCategories] = useState(categories);
    const handleSubmit = (name, color) => {
        console.log("name:", name);
        categories.push({ name, color });
        setAllCategories(categories);
        onClose();
    };

    const handleCategoryClick = (selectedCategory) => {
        onCategorySelect(selectedCategory);
    };

    //
    return (
        <Box
            bg="#354259"
            minH="514px"
            w="250px"
            borderRadius="10px"
            borderBottom="5px solid #44A0A0"
        >
            <Flex alignItems="center" mt="25px">
                <Box w="60px" h="1px" bg="#F6F6F6" />
                <Text mx="13px" fontSize="20px" fontWeight="600">
                    Categories
                </Text>
                <Box w="60px" h="1px" bg="#F6F6F6" />
            </Flex>

            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt="46px"
            >
                {allCategories.map((category, index) => {
                    return (
                        <Box
                            key={index}
                            bg={category.color}
                            w="200px"
                            borderRadius="10px"
                            mb="10px"
                            textAlign="center"
                            fontSize="20px"
                            cursor="pointer"
                            lineHeight="27px"
                            fontWeight="400"
                            onClick={() => {
                                handleCategoryClick(category.name);
                            }}
                        >
                            {category.name}
                        </Box>
                    );
                })}
            </Flex>

            <Button
                bg="#44A0A0"
                textAlign="center"
                borderRadius="10px"
                border="none"
                color="#F6F6F6"
                p="6px 13px"
                fontSize="20px"
                fontWeight="800"
                mt="146px"
                w="168px"
                mx="40px"
                mb="19px"
                cursor="pointer"
                position="sticky"
                onClick={onOpen}
            >
                Add Category
            </Button>
            <AddCategoryModal
                isOpen={isOpen}
                onClose={onClose}
                handleSubmit={handleSubmit}
            />
        </Box>
    );
};

export default Categories;
