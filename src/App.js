import Header from './components/Header'
import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import Tasks from './components/Tasks'
import Myform from './components/Myform'
import Fillform from './components/Fillform'
import Redbtn from './Redbtn'
import Works from './Works'
import Html from './Html'



function App() {

  //08 April 2021 About red button



  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors application',
    day: 'Feb 5th at 2.30pm',
    remainder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1.30pm',
    remainder: true

  },

  {
    id: 3,
    text: 'Food shopping',
    day: 'Feb 7th at 12.30pm',
    remainder: false
  }
  ])

  const [todos, setTodos] = useState([])

  const todoNameRef = useRef();

  const LOCAL_STORAGE_KEY = 'todoApp.todo'


  //onclick green button
  function onClickAdd(e) {
    e.preventDefault();

    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name);


    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: true }]
    })
    return name
  }

  const [lists, setList] = useState([]);

  const useRefName = useRef()
  const [tod, setTodo] = useState([])

  //onclick gray button in todos array
  function clicking(e) {
      console.log('gray button has clicked')

      const name = useRefName.current.value
      if (name == '') return
      console.log(name)

      setTodo(prev => {
          return [...prev, { id: 1, name: name, complete: true }]
      })
      return name
  }

  //save the tod value dispite of refresh in tod array
  useEffect(()=>{
    const storedTods = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
     if(storedTods) setTodo(storedTods)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tod))
  }, [tod])

  //clear all tods checked
  function clearTod(){
    const newTod = tod.filter(tod => !tod.complete)
    setTodos(newTod)
  }


  //Toggling the checkbox of Tod array

  function toggleTod(id) {
    const newTod = [...tod]  //create a copy of tod array
    const toda = newTod.find(toda=>toda.id===id)
    toda.complete = !toda.complete
    setTodos(newTod)

  }


  return (
    <div className="jumbotron bg-dark">
      {/* <Header />
      <Tasks tasks={tasks} />
      <Myform todos={todos} /><br />
      <Fillform list={tod} />    */}
      

      {/* <input ref={todoNameRef} style={{ marginLeft: 0, background: 'wheat', color: 'red' }} type='text'></input>
      <button style={{ background: 'green' }} onClick={onClickAdd}>+</button> */}

{/* 
       form of gray button */}
      {/* <input ref={useRefName} type='text'></input>
      <button onClick={clicking} type button>gray</button>
      <button onClick={clearTod}>ClearTods</button> */}
{/* 
      <Redbtn color='green' text='ADD'/>
      <Works /> */}
      <Html/>
     
    </div>
  );
}


export default App;
