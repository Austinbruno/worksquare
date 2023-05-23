import { Flex } from "@chakra-ui/react";
import React from "react";
import Tasks from "./tasks";

const TaskManager = () => {
    return (
        <Flex justifyContent="center" mt="114px" color="white" gap="12px">
            <Tasks />
        </Flex>
    );
};

export default TaskManager;
