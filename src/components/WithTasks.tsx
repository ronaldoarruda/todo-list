import './WithTasks.css'
import { HiOutlineTrash } from 'react-icons/hi'
import { useState } from 'react'

export interface tasksProps {
  id: string,
  content: string,
  isComplete: boolean
  trocarIsComplete: (id: string) => void
  deletarTask:(id: string) => void
} 

export function WithTasks({ id ,content, isComplete , trocarIsComplete, deletarTask}: tasksProps) {
  function handleClick() {
    trocarIsComplete(id)
  }

  function handleTasksDelete() {
    deletarTask(id)
  }


  return (
    <div className={isComplete? 'with-tasks' : 'with-tasks-completed'}>
      <button className='button-tasks' onClick={handleClick}>{isComplete?(<img src="check.png" alt="" />) : (<img src='check-completed.png'></img>)}</button>
      
      <p>{content}</p>
      <button className='button-tasks' onClick={handleTasksDelete}>
        <HiOutlineTrash size={24} color={'#808080'}/>
      </button>
    </div>
  )
}