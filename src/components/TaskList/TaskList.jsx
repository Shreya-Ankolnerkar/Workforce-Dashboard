import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
   
    <div id='taskList' className='mt-10 h-[55%] overflow-x-auto flex gap-5 w-full py-5 justify-start flex-nowrap items-center'>
      {data.tasks.map((elem,idx)=>{
         if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
         }
         if(elem.newTask){
            return <NewTask key={idx} data={elem}/>
         }
         if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
         }
         if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
         }
      })}
    </div>
  )
}

export default TaskList
