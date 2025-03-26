import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>

    <div className='border-2 rounded-xl border-[#313131] p-20'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>

            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black mb-10'>
             Workforce Dashboard
             </h1>

             <input
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
             required className='outline-none bg-transparent border-2 border-[#313131] text-xl py-2 px-6 rounded-full placeholder:text-gray-500' type="email" placeholder='Enter your Email'></input>
            
             <input
              value={password}
              onChange={(e)=>{
                 setPassword(e.target.value)
              }}
             required className='mt-5 outline-none bg-transparent border-2 border-[#313131] text-xl py-2 px-6 rounded-full placeholder:text-gray-500' type="password" placeholder='Enter your password'></input>
             <button className='mt-7 text-white outline-none hover:bg-[#515151] bg-[#313131] transition-shadow duration-150 active:scale-95 text-xl py-2 w-8/12 rounded-full placeholder:text-gray-500'>Log in</button>

            </form>
        </div>
    </div>
  )
}

export default Login
