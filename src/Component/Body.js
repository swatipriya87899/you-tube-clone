import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import {useSelector } from 'react-redux';


const Body = () => {
  const {showMenu} = useSelector(state=>state.app)


  return (
    <div className='grid grid-flow-col'>
      {showMenu && <div className='h-[100vh] col-span-1'><Sidebar></Sidebar></div>}
        
        <MainContainer></MainContainer>

    </div>
  )
}

export default Body