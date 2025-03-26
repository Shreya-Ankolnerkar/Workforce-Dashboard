import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[rgb(28,28,28)] p-5 rounded mt-5 overflow-auto'>
        <div className='bg-[#2a2929] mb-5 py-2 px-4 flex justify-between rounded border-[1px] border-[#949393]'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
                return <div key={idx} className='bg-[#313131] mb-5 py-2 px-4 flex justify-between rounded border-[1px] border-[#313131]'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5'>{elem.taskNumbers.failed}</h5>
        </div>
            })}
        </div>

        
      
    </div>
  )
}

export default AllTask
