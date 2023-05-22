import { Box, Text, Flex, useDisclosure, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { tasks } from "../../config/data";
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

    const [allTasks, setAllTasks] = useState(tasks);

    const handleSubmit = ({ title, category, color }) => {
        tasks.push({ title, category, color });
        setAllTasks(tasks);
        onClose();
    };
    const handleEdit = (task) => {
        console.log("task:", task);
        tasks[task.index] = task;
        console.log("tasks:", tasks);
        setAllTasks(tasks);
        onCloseEdit();
    };

    const handleCategoryFilter = (selectedCategory) => {
        const filteredTasks = tasks.filter(
            (task) => task.category === selectedCategory
        );

        setAllTasks(filteredTasks);
    };
    const handleDelete = (taskIndex) => {
        const updatedTasks = allTasks.filter(
            (task, index) => index !== taskIndex
        );
        setAllTasks(updatedTasks);
        onClose();
    };

    return (
        <>
            <Categories onCategorySelect={handleCategoryFilter} />
            <Box h="514px" w="650px">
                <Flex
                    bg="#354259"
                    borderRadius="10px"
                    align="center"
                    justifyContent="center"
                    px="20px"
                    borderBottom="5px solid #44A0A0"
                >
                    <Text fontWeight="700" fontSize="20px" color="#44A0A0">
                  
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
                    <Text
                        fontWeight="700"
                        fontSize="20px"
                        cursor="pointer"
                        color="#44A0A0"
                    >
                        Clear Completed
                    </Text>
                </Flex>

                <Box bg="#354259" borderRadius="10px" mt="11px">
                    <Box>
                        {allTasks.map((task, index) => {
                            console.log(index+1);
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
                                    borderBottom="1px solid #F6F6F6"
                                >
                                    <Box
                                        w="20px"
                                        h="20px"
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
                                    <Box cursor="pointer" onClick={() => handleDelete(index)}>
                                        <TiDelete size="40px" color="#FF5252"/>
                                    </Box>
                                </Flex>
                            );
                        })}
                    </Box>

                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        borderBottom="5px solid #44A0A0"
                        borderRadius="0px 0px 10px 10px"
                        h="45px"
                        p="8px 0px 9x 0px"
                        cursor="pointer"
                    >
                        <Text
                            fontWeight="800"
                            fontSize="20px"
                            pr="21px"
                            color="#44A0A0"
                            lineHeight="28px"
                        >
                            Active
                        </Text>
                        <Text
                            fontWeight="800"
                            fontSize="20px"
                            pr="21px"
                            lineHeight="28px"
                        >
                            All
                        </Text>
                        <Text
                            fontWeight="800"
                            fontSize="20px"
                            pr="21px"
                            color="#44A0A0"
                            lineHeight="28px"
                        >
                            Completed
                        </Text>
                    </Flex>
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
