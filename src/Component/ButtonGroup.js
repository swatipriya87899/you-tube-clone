import React from 'react'
import Button from './Button'

const ButtonGroup = () => {
  const buttons=["All", "Programming","Music","Thoughts","Live","Stock markets","Gaming"]
  return (
    <div className='flex'>
      {buttons.map((title)=><Button title={title}></Button>)}
    </div>
  )
}

export default ButtonGroup