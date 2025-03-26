import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const[userData, setUserData] = useContext(AuthContext)
  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const[date,setDate] = useState('')
  const[assignTo,setAssignTo] = useState('')
  const[category,setCategory] = useState('')

  const[newTask,setNewTask] = useState({})
  const submitHandler =(e)=>{
     e.preventDefault()

       setNewTask({title, description, date, category, active:false, newTask:true, failed:false, completed:false})
      const data = userData

      data.forEach(function (elem) {
        if(assignTo ==-elem.firstName)
          elem.tasks.push(newTask)
          elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1  
        
      })
      setUserData(data)
      console.log(data)

      setTitle('')
      setDescription('')
      setCategory('')
      setAssignTo('')
      setDate('')
      
  }
     
  return (
    <div>
       <div className='p-5 bg-[#1C1C1C] mt-10 rounded'>
        <form  onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex w-full flex-wrap items-start justify-between'>
        <div className='w-1/2'>

        <div>
            <h3 className='text-sm text-gray-200 mb-0.5'>Task Title</h3>
            <input 
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Make a UI Design'></input>
        </div>

        <div>
            <h3 className='text-sm text-gray-200 mb-0.5'>Date</h3>
            <input
            value={date}
            onChange={(e)=>{
              setDate(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400' type="date"></input>
        </div>

        <div>
            <h3 className='text-sm text-gray-200 mb-0.5'>Assign to</h3>
            <input 
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text' placeholder='Employee name'></input>
        </div>

        <div>
            <h3 className='text-sm text-gray-200 mb-0.5'>Category</h3>
            <input
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Development, etc. '></input>
        </div>
        </div>

      <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text=sm text-gray-200 mb-o.5'>Description</h3>
        <textarea 
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        className='w-full h-44 text=sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id='' cols="30" rows="10"></textarea>
        <button className='bg-emerald-600 py-3 hover:bg-emerald-700 px-5 rounded text-5m mt-4 w-full transition-transform duration-150 active:scale-95'>Create Task</button>
      </div>

      </form>
      </div>
    </div>
  )
}


export default CreateTask
