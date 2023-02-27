import React, { useEffect, useState } from 'react'

function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(null);
  const [todoToUpdate, setTodoToUpdate] = useState("");

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if(todos){
      setTodos(JSON.parse(todos))
    }
  }, []);


  const handleTODOSubmit = ()=> {
    const todos = localStorage.getItem("todos");
    if(todos){
      const todojson = JSON.parse(todos);
      if(todoToUpdate){
        const updatedTODOS = todojson.map(td => td === todoToUpdate? todo:td);
        localStorage.setItem("todos",JSON.stringify([...updatedTODOS]));
        setTodoToUpdate("");
      }
      else{
        const dup = todojson.find(t => t === todo);
        if(dup){
          alert("Duplicate Values are not allowed")
          return;
        }
        localStorage.setItem("todos",JSON.stringify([...todojson,todo]));
      }
    }
    else {
      localStorage.setItem("todos",JSON.stringify([todo]));
    }
    
    setTodo("");
    const t = localStorage.getItem("todos");
    setTodos(JSON.parse(t));
  }

  const handleDeleteTODO = (todo)=> {
    let todos = localStorage.getItem("todos");
    todos = JSON.parse(todos);
    const rem = todos.filter(t => t !== todo);
    setTodos(rem);
    localStorage.setItem("todos",JSON.stringify(rem));
  }

  const editTODO = (text)=> {
    const todos = localStorage.getItem("todos");
    const todojson = JSON.parse(todos);
    const todo = todojson.find(todo => todo === text);
    setTodoToUpdate(todo);
    setTodo(todo);
  }


  return (
    <div className='bg-gray-800 min-h-[100vh]'>
      <h1 className='text-center text-gray-100 py-10 text-[50px]'>Welcome to TODO App</h1>
      
      <div className='container px-2 mx-auto flex flex-col items-center gap-7'>
        <input value={todo} onChange={(e)=> setTodo(e.target.value)} className='rounded py-2 px-5 w-[800px] max-w-[100%] '  placeholder='add someting...'/>
        {
          todo.length !== 0 ? <button onClick={handleTODOSubmit} className='bg-green-500 rounded py-2 px-5 shadow'>{todoToUpdate? "Update Item":"Add Item"}</button>:<button  className='bg-green-300 rounded py-2 px-5 shadow'>Add Item</button>
        }
        
      </div>

      <div className='container px-2 mx-auto flex flex-col items-center gap-2 mt-[100px]'>
        {
          todos && <>
          {
            todos.map(todo => {
              return <div key={todo} className='flex  w-[600px] max-w-[100%] bg-green-100 rounded overflow-hidden'>
                          <div className='flex-1  p-2'>{todo}</div>
                          <div><button onClick={()=>editTODO(todo)} className='bg-blue-500 h-full px-5  text-white'>Edit</button></div>
                          <div><button onClick={()=>handleDeleteTODO(todo)} className='bg-red-500 h-full px-5 text-white'>Delete</button></div>
                      </div>
            })
          }
          </>
        }
        
    
        {
          
          todos?.length === 0 && <>
          <div className=''>
            <h1 className='text-white text-[26px] font-bold shadow-lg'>Empity TODO List! Add Someting</h1>
          </div>
          </>
        }
      </div>

    </div>
  )
}

export default Home