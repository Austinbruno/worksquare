import { Flex } from "@chakra-ui/react";
import React from "react";
import Tasks from "./tasks";

const TaskManager = () => {
    return (
        <Flex
            // alignItems="center"
            justifyContent="center"
            mt="114px"
            color="white"
            // h="514px"
            gap="12px"
        >
            {/* <Categories /> */}
            <Tasks />
        </Flex>
    );
};

export default TaskManager;
