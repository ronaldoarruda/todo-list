import { HiOutlineClipboardList } from 'react-icons/hi'
import './WithoutTasks.css'

export function WithoutTasks() {
  return (
    <div className='content'>
      <HiOutlineClipboardList size={56} color={'#808080'}/>
      <span><strong>Você ainda não tem tarefas cadastradas</strong><br /> Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}