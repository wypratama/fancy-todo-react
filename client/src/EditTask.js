function EditTask () {
  return (
    <div className="mt-4" id="edit-task">
      <form>
        <input type="number" id="edit-task-id" className="d-none"/>
        <div className="mb-3">
          <label htmlFor="edit-task-title" className="form-label">Title</label>
          <input type="text" className="form-control" id="edit-task-title" />
        </div>
        <div className="mb-3">
          <label htmlFor="edit-task-description" className="form-label">Description</label>
          <textarea className="form-control" id="edit-task-description" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="edit-task-due_date" className="form-label">Due Date</label>
          <input type="datetime-local" className="form-control" id="edit-task-due_date" />
        </div>
        <div className="alert alert-success" role="alert" id="edit-success-message">
          Success editing new task!
        </div>
        <button type="submit" className="btn btn-success mb-2">Update</button>
        <button type="button" className="btn btn-danger mb-2" onclick="backHome()">Cancel</button>
        <div id="edit-error">
        </div>
      </form>
      <div style="min-height: 100px;">

      </div>
    </div>
  )
}

export default EditTask