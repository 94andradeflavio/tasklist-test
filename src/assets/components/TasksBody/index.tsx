
import { useState, ChangeEvent } from 'react'
import { useTaskStore } from '../../../stores/useTaskStore'
import AddTask from '../AddTask'
import TaskList from '../TaskList'
import * as S from './styles'

function TasksBody() {
  const tasks = useTaskStore(state => state.tasks)

  const [filter, setFilter] = useState('all')
  const [order, setOrder] = useState('date')

  const concludedTasks = tasks.filter(task => task.hasDone === true).length


  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  const onChangeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value)
  }

  return (
    <>
       <S.ReportArea>
          <S.Text>Tarefas concluídas: { concludedTasks } de { tasks.length }</S.Text>
          <S.FilterArea>
              <S.SelectArea>
                  <p>Exibir tarefas: </p>
                  <select name="filter" onChange={onChangeFilter}>
                      <option value="all">Todas</option>
                      <option value="hasDone">Concluídas</option>
                      <option value="hasNotDone">Não concluídas</option>
                  </select>
              </S.SelectArea>
              <S.SelectArea>
                  <p>Ordenar por: </p>
                  <select name="order_by" onChange={onChangeOrder}>
                      <option value="date">Data de criação</option>
                      <option value="done">Status de conclusão</option>
                  </select>
              </S.SelectArea>
          </S.FilterArea>
      </S.ReportArea>
      <S.Container>
        <TaskList filter={filter} order={order} />
      </S.Container>
      <AddTask />
    </>
  )
}

export default TasksBody