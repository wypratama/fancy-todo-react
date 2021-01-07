import React, { useState, useEffect} from 'react'

function EditTask (props) {
  const [title, setTitle] = useState()
  const [des, setDes] = useState()
  const [date, setDate] = useState()
  let dateData = props.todo.due_date.split('')
  dateData.splice(-1)
  // useEffect(())
  const backHome = () => {
    props.setPage(props.backHome)
  }
  const bindTitle = (e) => {
    setTitle(e.target.value)
    console.log(title)
  }
  const bindDes = (e) => {
    setDes(e.target.value)
  }

  const bindDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="mt-4" id="edit-task">
      <form>
        <input type="number" id="edit-task-id" className="d-none"/>
        <div className="mb-3">
          <label htmlFor="edit-task-title" className="form-label">Title</label>
          <input type="text" className="form-control" defaultValue={props.todo.title} onChange={bindTitle}/>
        </div>
        <div className="mb-3">
          <label htmlFor="edit-task-description" className="form-label">Description</label>
          <textarea className="form-control" defaultValue={props.todo.desrcription} onChange={bindDes} rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="edit-task-due_date" className="form-label">Due Date</label>
          <input type="datetime-local" className="form-control" defaultValue={dateData.join('')} onChange={bindDate} />
        </div>
        <div className="alert alert-success" role="alert" id="edit-success-message">
          Success editing new task!
        </div>
        <button type="submit" className="btn btn-success mb-2">Update</button>
        <button type="button" className="btn btn-danger mb-2" onClick={props.backHome}>Cancel</button>
        <div id="edit-error">
        </div>
      </form>
      <div style={{minHeight: '100px'}}>

      </div>
    </div>
  )
}

export default EditTask