import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'first task',
        day: 'Mar 5th at 4:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'second task',
        day: 'Mar 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'third task',
        day: 'Mar 5th at 1:30pm',
        reminder: false,
    }
    ])
  
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
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("Your schedule is clear")}
    </div>
  );
}

export default App;
