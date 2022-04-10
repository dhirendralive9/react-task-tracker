import { useState  } from "react"

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Go shopping',
      day: 'Feb 5th at 2:30pm',
      reminder:false
    },
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder:false
    }
  ])
  return (
    
    <div>
        {tasks.map(
          (task)=>
        (<h3 key={task.id}>{task.text}</h3>)
        )}
    </div>
  )
}


export default Tasks