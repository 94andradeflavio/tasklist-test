import { useEffect } from 'react'
import { useTaskStore } from '../../../stores/useTaskStore'
import * as S from './styles'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createTaskFormSchema = z.object({
  text: z.string()
    .nonempty('O texto é obrigatório')
    .min(5, 'O texto não pode ter menos do que 5 letras')
    .transform(text => text.trim())
    .refine(text => /^\S.{4,}$/.test(text), 'O texto não pode ter somente espaços vazios nem menos de 5 carácteres')
})

type CreateTaskFormData = z.infer<typeof createTaskFormSchema>

const AddTask = () => {
  const addTask = useTaskStore(state => state.addToTasks)

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskFormSchema),
  })

  const createTask = (data: CreateTaskFormData) => addTask(data.text)

  useEffect(() => reset({text: ''}), [isSubmitSuccessful])

  return (
    <>
      <S.Form onSubmit={handleSubmit(createTask)}>
          <S.Input 
            type="text"
            placeholder='Adicione uma nova tarefa' 
            { ...register('text') }
          />
          <S.InputButton type='submit'>Adicionar tarefa</S.InputButton>
      </S.Form>
      { errors.text && <span>{ errors.text.message }</span> }
    </>
  )
}

export default AddTask