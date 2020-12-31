function Home () {
  return (
    <div className="mt-4" id="homepage">
        {/* Tombol Nav Atas */}
      <div className="text-center">
          <button type="button" className="btn btn-primary" id="alltask">
              All Task <span className="badge bg-dark" id="all-count"></span>
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
              </tbody>
          </table>

          {/* list Completed */}
          <table className="table table-hover w-100"  id="tabel-complete">
            <tbody id="complete-list">
            </tbody>
          </table>

          {/* list Uncompleted */}
          <table className="table table-hover w-100"  id="tabel-uncomplete">
            <tbody id="uncomplete-list">
            </tbody>
          </table>

          {/* list Missing */}
          <table className="table table-hover w-100"  id="tabel-missing">
            <tbody id="missing-list">
            </tbody>
          </table>
      </div>
      <div style={{minHeight: '100px'}}>

      </div>
    </div>
  )
}

export default Home