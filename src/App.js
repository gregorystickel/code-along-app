import { useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header'
import List from './components/List';


function App() {

  const [tasks, setTasks] = useState([]);
  console.log(tasks);
 
  const addTask = (newTask) => {
      setTasks([...tasks, newTask]);
      console.log("addTask:::",newTask)
  };

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask}/> 
      <List tasks={tasks} />
    </div>
  );
}

export default App;
