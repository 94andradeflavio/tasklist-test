import { useEffect, useRef, useState } from 'react'
import { useTaskStore } from '../../../stores/useTaskStore'
import TaskItem from '../TaskItem'
import * as S from './styles'
import { Task } from '../../types/Task';
import { sortByCompletion, sortByCreationDate } from '../../../utils/sortFunctions';

interface iProps {
  filter: string;
  order: string;
}

const TaskList = ({ filter, order }: iProps) => {
  const tasks = useTaskStore(state => state.tasks)
  const [filteredAndSortedTasks, setFilteredAndSortedTasks] = useState<Task[]>([])

  const filteredTasks = tasks.filter(task => {
    switch(filter) {
      case 'all':
        return task;
      case 'hasDone':
        return task.hasDone
      case 'hasNotDone':
        return !task.hasDone
    }
  })

  const bottomRef = useRef<null | HTMLElement>(null)

  useEffect(() => {
    switch(order) {
      case 'date':
        setFilteredAndSortedTasks(sortByCreationDate(filteredTasks))
        break;
      case 'done':
        setFilteredAndSortedTasks(sortByCompletion(filteredTasks))
        break;
    }
    
  }, [tasks, order, filter])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  return (
    <>
      <S.Tasks>
        {filteredAndSortedTasks.length > 0 ? filteredAndSortedTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        )) : (
          <S.Text>Você ainda não tem nenhuma tarefa</S.Text>
        )}
      <div ref={bottomRef as any} />
      </S.Tasks>
    </>
  )
}

export default TaskList