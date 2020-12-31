import React from 'react';

function listAll (props) {
  let dateLog = new Date (props.el.due_date)
  let date = dateLog.toDateString()
  let time = dateLog.toTimeString().split('GMT')[0]
  return (
    <tr className='row'>
        <td className="col"><b>{props.el.title}</b><br />
            {props.el.desrcription}  <br />
            <span className="badge bg-light text-dark"><em> due </em> {date} {time}</span> 
            
        </td>
        <td className="col-md-auto d-flex align-items-center">
            <button type="button" className="btn btn-warning btn-sm mr-1" >Edit</button>
            <button type="button" className="btn btn-success btn-sm mr-1" >Mark As Done</button>
            <button type="button" className="btn btn-dark btn-sm delbut" >Delete</button>
        </td>
    </tr>
  )
}

export default listAll