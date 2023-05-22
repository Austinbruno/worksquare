import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import moon from "../../assets/images/Moon.png";

const Moon = () => {
    return (
        <Flex justifyContent="flex-end">
            <Box />
            <Image src={moon} w="31.25px" h="35px" />
        </Flex>
    );
};

export default Moon;
