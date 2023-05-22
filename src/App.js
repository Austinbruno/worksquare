import { Box } from '@chakra-ui/react';
import './App.css';
import Moon from './component/atom/moon';
import Header from './component/header';
import TaskManager from './component/layout/taskManager';

const  App = () => {
  return (
    <Box padding="50px" bg="#121c2e" h="804px">
      <Moon />
      <Header />
      <TaskManager />
    </Box>
  );
}

export default App;
