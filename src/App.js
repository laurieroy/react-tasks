import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
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
  
  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className='container'>
     < Header />
     < Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;
