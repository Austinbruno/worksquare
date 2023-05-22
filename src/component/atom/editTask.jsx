import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import EditTaskModal from "./deleteTaskModal";
import { tasks } from "../../config/data";

const EditTask = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [task, setTask] = useState(tasks);
    const handleEdit = (task) => {
        tasks.push({ task, color: "#FFC107" });
        setTask(task);
        onClose();
    };
    return (
        <Box>
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
              Edit
            </Button>
            <EditTaskModal
                isOpen={isOpen}
                onClose={onClose}
                handleSubmit={handleEdit}
            />
        </Box>
    );
};

export default EditTask;
