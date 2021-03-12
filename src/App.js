import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [showTask, setShowTask] = useState(false)
    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'first task',
        date: 'Mar 5th at 4:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'second task',
        date: 'Mar 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'third task',
        date: 'Mar 5th at 1:30pm',
        reminder: false,
    }
    ])
  
  const insertTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id? { ...task, reminder:!task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowTask(!showTask) } showInsert={showTask}/>
      {showTask && <AddTask onInsert={insertTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("Your schedule is clear")}
    </div>
  );
}

export default App;
