import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doc App',
        day: 'Jan 25th at 2.30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Jan 26th at 1.30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Jan 24th at 2.30pm',
        reminder: false,
    }
]
)
//  Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> : 'Nothing to display'}
    </div>
  );
}

export default App;
