import React from 'react';
import EditTask from '../EditTask'
import Home from '../Home'

function listAll (props) {
  let dateLog = new Date (props.el.due_date)
  let date = dateLog.toDateString()
  let time = dateLog.toTimeString().split('GMT')[0]
  // const backHome = () => {
  //   props.setPage(<Home />)
  // }
  const editThis = () => {
    props.setPage(<EditTask todo={props.el} setPage={props.setPage} backHome={props.backHome} />)
  }
  return (
    <tr className='row'>
        <td className="col"><b>{props.el.title}</b><br />
            {props.el.desrcription}  <br />
            <span className="badge bg-light text-dark"><em> due </em> {date} {time}</span> 
            
        </td>
        <td className="col-md-auto d-flex align-items-center">
            <button type="button" className="btn btn-warning btn-sm mr-1" onClick={editThis} >Edit</button>
            {props.el.status ? <button type="button" className="btn btn-danger btn-sm mr-1">Mark  Undone</button> : <button type="button" className="btn btn-success btn-sm mr-1" >Mark As Done</button>}
            <button type="button" className="btn btn-dark btn-sm delbut" >Delete</button>
        </td>
    </tr>
  )
}

export default listAll