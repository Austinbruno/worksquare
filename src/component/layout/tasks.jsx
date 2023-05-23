import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import AddTaskModal from "../atom/addTaskModal";
import EditTaskModal from "../atom/editTaskModal";
import Categories from "./categories";

const Tasks = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        isOpen: isOpenEdit,
        onOpen: onOpenEdit,
        onClose: onCloseEdit,
    } = useDisclosure();

    const [currentTask, setCurrentTask] = useState({});

    const [currentColor, setColor] = useState({});

    const [allTasks, setAllTasks] = useState([]);

    const taskLength = allTasks.length;
    const length = allTasks.length > 0 ? taskLength : "No ";
    useEffect(() => {
        if (!localStorage.tasks?.length) {
            localStorage.tasks = JSON.stringify([]);
        } else {
            const stored = JSON.parse(localStorage.tasks);
            setAllTasks(stored);
        }
    }, []);

    // Add Tasks
    const handleSubmit = ({ title, category, color }) => {
        allTasks.push({ title, category, color });
        setAllTasks(allTasks);
        localStorage.tasks = JSON.stringify(allTasks);

        onClose();
    };

    // Edit Tasks
    const handleEdit = (task) => {
        allTasks[task.index] = task;
        setAllTasks(allTasks);
        localStorage.tasks = JSON.stringify(task);
        onCloseEdit();
    };
    // Filter Tasks
    const handleCategoryFilter = (selectedCategory) => {
        const filteredTasks = allTasks.filter(
            (task) => task.category === selectedCategory
        );

        setAllTasks(filteredTasks);
    };
    // Delete Tasks
    const handleDelete = (taskIndex) => {
        const updatedTasks = allTasks.filter(
            (task, index) => index !== taskIndex
        );
        setAllTasks(updatedTasks);
        localStorage.tasks = JSON.stringify(updatedTasks);

        onClose();
    };

    return (
        <>
            <Categories onCategorySelect={handleCategoryFilter} />
            <Box h="514px" minW={{ lg: "650px", sm: "425px" }}>
                <Flex
                    bg="#354259"
                    borderRadius="10px"
                    align="center"
                    justifyContent="center"
                    px="20px"
                    borderBottom="5px solid #44A0A0"
                >
                    <Text fontWeight="700" fontSize="20px" color="#44A0A0">
                        {length} Task
                    </Text>
                    <Box
                        bg="#44A0A0"
                        textAlign="center"
                        borderRadius="10px"
                        border="none"
                        color="#F6F6F6"
                        p="6px 13px"
                        fontSize="20px"
                        lineHeight="18px"
                        fontWeight="800"
                        cursor="pointer"
                        w="142px"
                        mx="auto"
                        mb="15px"
                        mt="15px"
                        onClick={onOpen}
                    >
                        Add New Task
                    </Box>
                </Flex>

                <Box
                    bg="#354259"
                    borderBottom={
                        allTasks.length === 0 ? "none" : "5px solid #44A0A0"
                    }
                    borderRadius="10px"
                    mt="11px"
                >
                    <Box>
                        {allTasks.map((task, index) => {
                            return (
                                <Flex
                                    key={index}
                                    alignItems="center"
                                    justifyContent="space-between"
                                    mb="10px"
                                    cursor="pointer"
                                    textAlign="center"
                                    fontSize="20px"
                                    lineHeight="27px"
                                    fontWeight="400"
                                    px="10px"
                                    borderBottom={
                                        index === allTasks.length - 1
                                            ? "none"
                                            : "1px solid #F6F6F6"
                                    }
                                >
                                    <Box
                                        w="35px"
                                        h="35px"
                                        borderRadius="100%"
                                        bg="#4CAF50"
                                        p="9px"
                                    >
                                        <FaCheck size="20px" />
                                    </Box>

                                    <Text
                                        ml="8px"
                                        mr="10px"
                                        onClick={() => {
                                            setCurrentTask({ index, ...task });
                                            onOpenEdit();
                                        }}
                                    >
                                        {task.title}
                                    </Text>

                                    <Flex
                                        gap="15px"
                                        textAlign="center"
                                        alignItems="center"
                                    >
                                        <Box
                                            bg={task.color}
                                            w="150px"
                                            borderRadius="10px"
                                            mb="10px"
                                            py="auto"
                                            textAlign="center"
                                            fontSize="20px"
                                            lineHeight="27px"
                                            fontWeight="400"
                                        >
                                            {task.category}
                                        </Box>
                                        <Box
                                            cursor="pointer"
                                            onClick={() => handleDelete(index)}
                                        >
                                            <TiDelete
                                                size="40px"
                                                color="#FF5252"
                                            />
                                        </Box>
                                    </Flex>
                                </Flex>
                            );
                        })}
                    </Box>
                </Box>
                <AddTaskModal
                    isOpen={isOpen}
                    onClose={onClose}
                    handleSubmit={handleSubmit}
                    color={currentColor}
                    setColor={setColor}
                />
                <EditTaskModal
                    isOpen={isOpenEdit}
                    onClose={onCloseEdit}
                    handleEdit={handleEdit}
                    task={currentTask}
                    setEditedTask={setCurrentTask}
                />
            </Box>
        </>
    );
};

export default Tasks;
