import React, { useState, useEffect } from 'react'
import axios from './axios'
import ListAll from './components/list-all'

function Home () {
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])
  const [uncompleted, setUncompleted] = useState([])
  const [sort, setSort] = useState('all')
  const [toShow, setToShow] = useState()
  const showAll = e => {
    e.preventDefault()
    setSort('all')
  }
  const showCompleted = e => {
    e.preventDefault()
    setSort('completed')
  }
  const showUncompleted = e => {
    e.preventDefault()
    setSort('uncompleted')
  }
  useEffect(()=> {
    axios({
      method: "GET",
      url: "/todos",
      headers: {
          access_token: localStorage.getItem('access_token')
      }
      })
      .then (res => {
        setTodos(res.data.list)
        // console.log(todos)
      })
      .catch(err => {
          console.log(err)
      })
      .then(_=> {
          
      })
  }, [])
  useEffect(() => {
    setCompleted( todos.filter(el =>  el.status === true ) )
    setUncompleted( todos.filter(el =>  el.status === false ) )
    switch (sort) {
      case 'all':
        setToShow(todos)
        break;
      case 'completed':
        setToShow(completed)
        break;
      case 'uncompleted':
        setToShow(uncompleted)
        break;
      default:
        break;
    }
  }, [todos, sort, completed, uncompleted])

  return (
    <div className="mt-4" id="homepage">
        {/* Tombol Nav Atas */}
      <div className="text-center d-flex flex-row gap-1 justify-content-center">
          <button type="button" className="btn btn-primary" onClick={showAll}>
              All Task <span className="badge bg-dark">{todos.length}</span>
          </button>
          <button type="button" className="btn btn-warning" onClick={showUncompleted}>
              Uncompleted <span className="badge bg-dark" id="uncomplete-count">{uncompleted.length}</span>
          </button>
          <button type="button" className="btn btn-success" onClick={showCompleted}>
              Completed <span className="badge bg-dark" id="complete-count">{completed.length}</span>
          </button>
          <button type="button" className="btn btn-danger" id="missingtask">
              Missing <span className="badge bg-dark" id="missing-count"></span>
          </button>
      </div>
      {/* LIst To Do */}
      <div className="mt-2" style={{minHeight: '300px'}}>
          <table className="table table-hover w-100"  id="tabel-all">
              <tbody id="list">
              {toShow && toShow.map(el => {
                return (<ListAll key={el.id} el={el}/>)
              })}
              </tbody>
          </table>

          {/* list Completed */}
          {/* <table className="table table-hover w-100"  id="tabel-complete">
            <tbody id="complete-list">
            </tbody>
          </table> */}

          {/* list Uncompleted */}
          {/* <table className="table table-hover w-100"  id="tabel-uncomplete">
            <tbody id="uncomplete-list">
            </tbody>
          </table> */}

          {/* list Missing */}
          {/* <table className="table table-hover w-100"  id="tabel-missing">
            <tbody id="missing-list">
            </tbody>
          </table> */}
      </div>
      <div style={{minHeight: '100px'}}>

      </div>
    </div>
  )
}

export default Home