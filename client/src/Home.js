import React, { useState, useEffect} from 'react'
import axios from './axios'
import ListAll from './components/list-all'

function Home (props) {
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])
  const [uncompleted, setUncompleted] = useState([])
  const [missing, setMissing] = useState([])
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
  const showMissing = e => {
    e.preventDefault()
    setSort('missing')    
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
        setCompleted( res.data.list.filter(el =>  el.status === true ) )
        setUncompleted( res.data.list.filter(el =>  el.status === false ) )
        setMissing( res.data.list.filter(el =>  new Date(el.due_date) < new Date () ) )
      })
      .catch(err => {
          console.log(err)
      })
      .then(_=> {
          
      })
  }, [])
  useEffect(() => {
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
      case 'missing':
        setToShow(missing)
        break;
      default:
        break;
    }
  }, [todos, sort, completed, uncompleted, missing])



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
          <button type="button" className="btn btn-danger" onClick={showMissing}>
              Missing <span className="badge bg-dark" id="missing-count">{missing.length}</span>
          </button>
      </div>
      {/* LIst To Do */}
      <div className="mt-2" style={{minHeight: '300px'}}>
          <table className="table table-hover w-100"  id="tabel-all">
              <tbody id="list">
              {toShow && toShow.map(el => {
                return (<ListAll key={el.id} el={el} setPage={props.setPage}/>)
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