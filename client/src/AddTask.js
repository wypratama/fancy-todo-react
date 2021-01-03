function AddTask () {
return (
  <div className="mt-4" id="newtask">
    <form>
      <div className="mb-3">
        <label htmlFor="add-task-title" className="form-label">Title</label>
        <input type="text" className="form-control" id="add-task-title"/>
      </div>
      <div className="mb-3">
        <label htmlFor="add-task-description" className="form-label">Description</label>
        <textarea className="form-control" id="add-task-description" rows="3"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="add-task-due_date" className="form-label">Due Date</label>
        <input type="datetime-local" className="form-control" id="add-task-due_date"/>
      </div>
      <div className="alert alert-success" role="alert" id="add-success-message">
        Success adding new task!
      </div>
      <button type="submit" className="btn btn-success mb-2">Submit</button>
      <button type="button" className="btn btn-danger mb-2">Cancel</button>
      <div id="add-error">
      </div>
    </form>
    <div style={{minHeight: '100px'}}>

    </div>
  </div>
)
}

export default AddTask