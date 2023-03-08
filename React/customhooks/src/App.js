import React, { useEffect, useState } from 'react';
import Tasks from './Components/Tasks/Tasks';
import NewTask from './Components/NewTask/NewTask';
import useHttp from  './Components/Hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const {isLoading, error,sendRequest:fetchTasks} = useHttp();
 
  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];
      for(const taskKey in taskObj) {
        loadedTasks.push({id: taskKey, text: taskObj[taskKey].text});
      }
      setTasks(loadedTasks);
    };
    fetchTasks(
      {url : 'https://react-http-6b4a6.firebaseio.com/tasks.json'},
      transformTasks
      );
  }, [fetchTasks]);
  
  const taskAddHandler =(task) => {
    setTasks((prevTasks) => prevTasks.concat(task));  
  };

  
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;