import React from 'react'

const Header = (props) => {
  const logoutUser = () =>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hey!<br/><span className='text-2xl font-semibold'>Welcome back📥</span></h1>
      <button onClick={logoutUser} className='bg-[#545353] transition-shadow duration-150 active:scale-95 text-white text-lg font-medium px-5 py-2 rounded-md hover:bg-[#6d6d6d]'>Log out</button>
    </div>
  )
}

export default Header
