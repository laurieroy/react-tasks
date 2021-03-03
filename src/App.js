import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Get up',
			day: 'Mar 3d at 8:00am',
			reminder: false,
		},
		{
			id: 2,
			text: 'Make Coffee',
			day: 'Mar 3d at 8:01am',
			reminder: false,
		},
		{
			id: 3,
			text: 'Do Yoga',
			day: 'Mar 3d at 8:05am',
			reminder: false,
		},
		{
			id: 4,
			text: 'Code',
			day: 'Mar 3d at 8:30am',
			reminder: false,
		}
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask ])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      { ...task, reminder: !task.reminder } : task ))
  }

  return (
    <div className='container'>
      < Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && < AddTask onAdd={addTask} />}
      { tasks.length > 0 ? ( < Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder}
        /> ) 
        : ('No Tasks to Show'
      ) }
    </div>
  )
}

export default App;
