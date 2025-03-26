import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5  bg-[#3C3D37] rounded-xl'>
         <div className='flex justify-between items-center'>
            <h3 className='bg-[#585b5b] px-3 text-sm py-1 rounded '>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
         <p className='text-sm mt-top'><br/>{data.description}</p>
         <div className='mt-10 flex justify-center items-center'>
            <button className='bg-slate-300 w-1/2 text-black py-1 rounded-sm '>Accept Task</button>

         </div>
        </div>
  )
}

export default NewTask
