import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const[user, setUser] = useState(null) 
const[loggedInUser,setLoggedInUser] = useState(null)
const[userData,setUserData] = useContext(AuthContext)

useEffect(()=>{
  //getLocalStorage()

  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUser(userData.data)
  }
},[])

const handleLogin =(email, password)=>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(userData ){
    const employee = userData.find((e) => email == e.email && e.password == password)
    if(employee){
    setUser('employee')
    setLoggedInUser(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
  }
  else{
    alert('Invalid Credentials!')
  }
  
}

  return (
   <>
  {!user ? <Login handleLogin = {handleLogin}/> : ''}
  {user == 'admin' ? <AdminDashboard changeUser = {setUser}/> : (user == 'employee' ? <EmployeeDashboard  changeUser ={setUser} data={loggedInUser}/> : null )}
  
   </>
  )
}

export default App
