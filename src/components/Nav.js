import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Nav = () => {
  return (
    <div className='container'>
    <Link to='/' className='home'>HOME</Link>
    <Link to='/student' className='stud'>STUDENT</Link>
    <Link to='/contactus' className='cont'>CONTACTUS</Link>
    </div>
  )
}

export default Nav