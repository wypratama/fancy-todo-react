import React, { useState, useEffect } from 'react'
import axios from './axios'
import ListAll from './components/list-all'

function Home () {
  const [todos, setTodos] = useState([])
  const [sort, setSort] = useState('all')
  const [toShow, setToShow] = useState()
  const showAll = (e) => {
    e.preventDefault()
    console.log('clicked')
    setSort('all')
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
    switch (sort) {
      case 'all':
        setToShow(todos)
        break;
    
      default:
        break;
    }
  }, [todos, sort])
  // console.log(toShow, 'this is toShow')
  return (
    <div className="mt-4" id="homepage">
        {/* Tombol Nav Atas */}
      <div className="text-center">
          <button type="button" className="btn btn-primary" onClick={showAll}>
              All Task <span className="badge bg-dark">{todos.length}</span>
          </button>
          <button type="button" className="btn btn-warning" id="uncomplete-task">
              Uncompleted <span className="badge bg-dark" id="uncomplete-count"></span>
          </button>
          <button type="button" className="btn btn-success" id="completetask">
              Completed <span className="badge bg-dark" id="complete-count"></span>
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