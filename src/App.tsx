import { FormEvent, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import './App.css'
import { WithTasks } from './components/WithTasks'
import { v4 as uuidv4 } from 'uuid';
import { WithoutTasks } from './components/WithoutTasks'

function App() {

  const [ tasksBoard, setTasksBoard ] = useState([
    {
      id: uuidv4(),
      task: 'fazer atividade física',
      isComplete: true
    },
    {
      id: uuidv4(),
      task: 'Fazer café',
      isComplete: true
    },
    {
      id: uuidv4(),
      task: 'Dormir cedo',
      isComplete: false,
    }]
  )

  function trocarIsComplete(id: string) {
    setTasksBoard(tasksBoard.map(task => {
      if(task.id === id) {
        task.isComplete = !task.isComplete 
      }
      return task
    }))
  }

  function deleteTask(taskToDelete: string) {
    const tasksBoardWithoutDeleteOne = tasksBoard.filter( task => {
      return task.id !== taskToDelete;
    })
    setTasksBoard(tasksBoardWithoutDeleteOne)
  }

  function handleCreatedNewTask(event: FormEvent) {
    setTasksBoard([...tasksBoard], )
  }

  const countTasksCompleted = tasksBoard.filter( task => task.isComplete === false)
  

  return (
    <div className="App">
      <header className='header'>
        <img src="Logo.png" alt="" />
      </header>
      <form className='action' onSubmit={handleCreatedNewTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type='submit'>Criar <AiOutlinePlusCircle size={16} color={'#fff'} /></button>
      </form>
      <section className='contain'>
        <header className='feedback'>
          <div className='created-tasks'>
            <strong>Tarefas criadas</strong>
            <p>{tasksBoard.length}</p>
          </div>
          <div className='completed-tasks'>
            <strong>Concluídas</strong>
            <p id='finished-of-all'>{countTasksCompleted.length} de {tasksBoard.length}</p>
          </div>
        </header>
        {tasksBoard.length === 0 ? (<WithoutTasks />) : (
          tasksBoard.map(task => {
            return (
              <WithTasks 
                key={task.id} 
                content={task.task} 
                isComplete={task.isComplete} id={task.id} 
                trocarIsComplete={trocarIsComplete}
                deletarTask={deleteTask}
              />
            )
          })
        )}
        <div >
        </div>
      </section>
    </div>
  )
}



export default App
