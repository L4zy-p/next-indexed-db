import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { DatabaseService } from '../services/database'
import { CardTodo, FormTodo } from '../components'
import { Grid } from '@mui/material'

export default function Home() {
  const [todos, setTodos] = useState([])
  const [] = useState({})

  useEffect(() => {
    getToDoFormDB()
  }, [])

  const getToDoFormDB = () => {
    DatabaseService.init().then(async () => {
      const todos = await DatabaseService.getAll()
      setTodos(todos)
    })
  }

  const addTodo = async (name) => {
    const allTodos = await DatabaseService.add(name)
    setTodos(allTodos)
  }

  const editTodo = async (id, value) => {
    const allTodos = await DatabaseService.updateById(id, value)
    setTodos(allTodos)
  }

  const deleteTodo = async (id) => {
    const allTodos = await DatabaseService.deleteById(id)
    setTodos(allTodos)
  }

  const toggleTodo = async (id) => {
    const allTodos = await DatabaseService.toggleCompleted(id)
    setTodos(allTodos)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js & IndexedDB!</a>
        </h1>
        <br />

        <div className={styles.grid}>
          <Grid container justifyContent='center'>
            <Grid item>
              <FormTodo submit={addTodo} />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              todos?.map((todo, index) =>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={6}
                  key={index}>
                  <CardTodo
                    item={todo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo} />
                </Grid>)
            }
          </Grid>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/vercel.svg`}
              alt='Vercel Logo'
              width={72}
              height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
