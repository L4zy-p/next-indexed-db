class DatabaseProvider {
  constructor() {
    this.db = {}
    this.dbName = 'todos'
    this.dbVersion = 3
    this.stores = { TODOS: 'todos' }
    this.requset = null
  }

  init = () => {
    return new Promise((resolve) => {
      this.requset = window.indexedDB.open(this.dbName, this.dbVersion) // open database 

      // update the database structure 
      this.requset.onupgradeneeded = () => {
        this.db = this.requset.result
        this.createTodosStore()
      }

      // success to do
      this.requset.onsuccess = event => {
        this.db = event.target.result
        resolve()
      }

      // error to do
      this.requset.onerror = error => {
        console.error({ error })
      }
    })
  }

  createTodosStore = () => {
    const storeConfig = { keyPath: 'id', autoIncrement: true } // key is id and auto increament
    const objectStore = this.db.createObjectStore(this.stores.TODOS, storeConfig) // create object to store by config

    // if look at browser table todos has two, "name" and "completed"
    objectStore.createIndex('name', 'name')
    objectStore.createIndex('completed', 'completed')
  }

  getTodosObjectStore = () => {
    const transaction = this.db.transaction([this.stores.TODOS], 'readwrite') // 

    transaction.onerror = error => {
      console.error({ error })
    }

    return transaction.objectStore(this.stores.TODOS)
  }

  getAll = () => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore()

      const openCursor = objectStore.openCursor() // cursor all item in table todo
      const items = []

      openCursor.onsuccess = event => {
        const cursor = event.target.result

        //check if has record
        if (cursor) {
          items.push(cursor.value)
          cursor.continue()
        } else {
          resolve(items)
        }
      }

     
      openCursor.onerror = error => {
        reject(error)
      }
    })
  }

  add = (name) => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore() // table todos
      const addRequest = objectStore.put({ name, completed: false }) // put this object to table todos

      addRequest.onsuccess = async () => {
        const allTodos = await this.getAll()
        resolve(allTodos)
      }

      addRequest.onerror = error => {
        reject(error)
      }
    })
  }

  updateById = (id, newValue) => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore()
      const keyRange = IDBKeyRange.only(id) // setting range of key
      const cursor = objectStore.openCursor(keyRange) // cursor to keyRange in table todo

      cursor.onsuccess = () => {
        const cursorWithValue = cursor.result
        const { value } = cursorWithValue

        const updateTo = { ...value, ...newValue }
        const update = cursorWithValue.update(updateTo)

        update.onsuccess = async () => {
          const allTodos = this.getAll()
          resolve(allTodos)
        }

        update.onerror = error => {
          reject(error)
        }
      }

      cursor.onerror = error => {
        console.log('Item on check error', { error })
      }
    })
  }

  toggleCompleted = id => {
    // this same updateById
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore()
      const keyRange = IDBKeyRange.only(id)
      const cursor = objectStore.openCursor(keyRange)

      cursor.onsuccess = () => {
        const cursorWithValue = cursor.result
        const { value } = cursorWithValue

        const updateTo = { ...value, completed: !value.completed }
        const update = cursorWithValue.update(updateTo)

        update.onsuccess = async () => {
          const allTodos = await this.getAll()
          resolve(allTodos)
        }

        update.onerror = error => {
          reject(error)
        }
      }

      cursor.onerror = error => {
        console.log('Item on check error', { error })
      }
    })
  }

  deleteById = id => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore()
      const deleting = objectStore.delete(id) // delete todo id in table todos

      deleting.onsuccess = async (response) => {
        const allTodos = await this.getAll()
        resolve(allTodos)
      }

      deleting.onerror = error => {
        reject(error)
      }
    })
  }
}

export const DatabaseService = new DatabaseProvider()