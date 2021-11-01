import { Box, TextField, Button, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useMemo } from 'react'

export const FormTodo = ({ submit, initialValues }) => {
  const valiadateSchema = Yup.object().shape({
    name: Yup.string().required('todo is required')
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(valiadateSchema),
    defaultValues: useMemo(() => initialValues, [initialValues])
  })

  const onSubmit = data => {
    submit(data?.name)
    reset()
  }

  return <Box
    component='form'
    noValidate
    autoComplete='off'
    onSubmit={handleSubmit(onSubmit)}
  >
    <Grid container alignItems='center' spacing={2}>
      <Grid flex='auto' item>
        <TextField
          style={{ width: '100%' }}
          size='small'
          required
          id='name'
          name='name'
          label='todo'
          {...register('name')}
          error={errors?.name ? true : false}
        />
      </Grid>
      <Grid item>
        <Button
          type='submit'
          variant='contained'
          color='primary'
        >
          save
        </Button>
      </Grid>
    </Grid>
    <br />
  </Box>
}