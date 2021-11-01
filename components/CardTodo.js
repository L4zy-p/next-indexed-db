import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
  Grid,
  Switch
} from '@mui/material'
import {
  EditOutlined,
  DeleteOutline
} from '@mui/icons-material';
import { FormTodo } from './FormTodo'
import { useState } from 'react';

export const CardTodo = ({
  item, editTodo,
  deleteTodo, toggleTodo
}) => {
  const [isEdit, setIsEdit] = useState(false)

  const onClickEdit = () => {
    setIsEdit(true)
  }

  const onCancelEdit = () => {
    setIsEdit(false)
  }

  const onSubmitEdit = (name) => {
    editTodo(item?.id, {
      name,
      completed: item?.completed
    })
    setIsEdit(false)
  }

  const onClickDelete = () => {
    deleteTodo(item?.id)
  }

  const onChangeToggle = (e) => {
    toggleTodo(item?.id)
  }

  return <Card
    sx={{ width: '100%' }}>
    <CardContent>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'>
        <Grid>
          <Typography
            sx={{ fontSize: 14 }}
            color='text.secondary'
            gutterBottom>
            #{item?.id}
          </Typography>
        </Grid>
        <Grid>
          <Switch
            checked={item?.completed}
            onChange={onChangeToggle} />
        </Grid>
      </Grid>
      {
        isEdit && <FormTodo
          initialValues={item}
          submit={onSubmitEdit} />
      }
      {
        !isEdit && <Typography
          variant='h5'
          component='div'>
          {item?.name}
        </Typography>
      }
    </CardContent>
    <CardActions>
      <Grid
        container
        justifyContent='flex-end'>
        {
          isEdit && <Grid
            item>
            <Button
              color='primary'
              onClick={onCancelEdit}>
              Cancel
            </Button>
          </Grid>
        }
        {
          !isEdit && <Grid item>
            <IconButton
              color='primary'
              onClick={onClickEdit}>
              <EditOutlined />
            </IconButton>
          </Grid>
        }
        <Grid item>
          <IconButton
            color='error'
            onClick={onClickDelete}>
            <DeleteOutline />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  </Card >
}