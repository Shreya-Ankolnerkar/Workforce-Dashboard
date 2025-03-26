import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='mt-10 flex justify-between gap-5 screen'>
        <div className='h-40 w-[45%] py-6 px-9 bg-[#3F3B6C] rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>

        <div className='h-40 w-[45%] py-6 px-9 bg-[#624F82] rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>

        <div className='h-40 w-[45%] py-6 px-9 bg-[#9F73AB] rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>

        <div className='h-40 w-[45%] py-6 px-9 bg-[#8a739e] rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
