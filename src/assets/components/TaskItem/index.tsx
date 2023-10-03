import { useEffect } from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

import * as S from './styles'

import { Task } from '../../types/Task';
import { useTaskStore } from '../../../stores/useTaskStore';

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface iProps {
  task: Task
}

const regex = /^\S.{4,}$/

const createTaskFormSchema = z.object({
  textupdated: z.string()
    .nonempty('O texto é obrigatório')
    .min(5, 'O texto não pode ter menos do que 5 letras')
    .transform(text => text.trim())
    .refine(text => regex.test(text), 'O texto não pode ter somente espaços vazios nem menos de 5 carácteres')
})

type CreateTaskFormData = z.infer<typeof createTaskFormSchema>

const TaskItem = ({ task }: iProps) => {
  const completeTask = useTaskStore(state => state.completeTask)
  const updateTask = useTaskStore(state => state.updateTask)
  const removeTask = useTaskStore(state => state.removeTask)

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskFormSchema),
    mode: 'onChange'
  })

  const handleTask = (data: CreateTaskFormData) => updateTask(task.id, data.textupdated)

  useEffect(() => setValue('textupdated', task.text), [])


  return (
    <S.Container className={ task.hasDone ? 'hasDone' : '' }>
        <S.Form onChange={handleSubmit(handleTask)}>
          <S.Text 
            type='text'
            { ...register('textupdated') }
          />
          { errors.textupdated && <small>{ errors.textupdated.message }</small> }
        </S.Form>
        <S.ButtonsArea>
            { !task.hasDone && (
              <S.Button className='conclude' onClick={() => completeTask(task.id)}>
                <p>Concluir</p>
                <CheckCircleOutlineIcon fontSize='small' />
              </S.Button>
            ) }
            <S.Button className='remove' onClick={() => removeTask(task.id)}>
              <p>Remover</p> 
              <DeleteIcon fontSize='small' />
            </S.Button>
          </S.ButtonsArea>
        <S.DateText>Criado em: { task.createdAt }</S.DateText>
    </S.Container>
  )
}

export default TaskItem