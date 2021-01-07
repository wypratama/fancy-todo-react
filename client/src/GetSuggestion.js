
import React, { useState, useEffect } from 'react';
import axios from './axios'
import Home from './Home'

function Getsuggestion (props) {
  const [type, setType] = useState()
  const [activity, setActivity] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const backHome = () => {
    props.setPage(<Home />)
  }
  // const postSuggest = () => {
  //   console.log(title, description)
  // }
  useEffect(()=> {
    axios({
      url: '/todos/suggest',
      method: 'GET',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(res => {
      setType('try ' + res.data.try.type)
      setActivity(res.data.try.activity)
    })
  },[])
  console.log(title, description)
  return (
    <div className="mt-4" id="getsuggest">
      <form>
        <div className="mb-3">
          <label htmlFor="get-suggest-title" className="form-label">Title</label>
          <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} on defaultValue={type}/>
        </div>
        <div className="mb-3">
          <label htmlFor="get-suggest-description" className="form-label">Description</label>
          <textarea className="form-control" onChange={(e) => setDescription(e.target.value)}rows="3" defaultValue={activity}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="get-suggest-due_date" className="form-label">Due Date</label>
          <div className="sm-alert alert-warning alert-dismissible fade show form-text" role="alert" id="pickdue">
          <small>Don't forget to pick due date.</small>
          </div>
          <input type="datetime-local" className="form-control" id="get-suggest-due_date"/>
        </div>
        <div className="alert alert-success" role="alert" id="suggest-success-message">
          Success adding new task!
        </div>
        <button type="submit" className="btn btn-success mb-2">I'll give it a go!</button>
        <button type="button" className="btn btn-warning mb-2" >Get New One</button>
        <button type="button" className="btn btn-danger mb-2" onClick={props.backHome}>Cancel</button>
        <div id="suggest-error">
        </div>
      </form>
      <div style={{minHeight: '100px'}}>

      </div>
    </div>
  )
}

export default Getsuggestion