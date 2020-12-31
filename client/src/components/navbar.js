import Landing from '../Landing'

function Navbar (props) {
  const logout = () => {
    localStorage.clear()
    props.setPage(<Landing/>)
  }
  return (
    <div className="fixed-bottom pb-5 bg-light pt-2" id="footernav">
      <ul className="nav justify-content-center">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="homelink"  defaultChecked onClick="homepage()" />
          <label className="btn btn-outline-dark" htmlFor="homelink">See List</label>
        
          <input type="radio" className="btn-check" name="btnradio" id="newlink"   onClick="newTask()" />
          <label className="btn btn-outline-dark" htmlFor="newlink">Add New</label>
        
          <input type="radio" className="btn-check" name="btnradio" id="suggestlink"  onClick="getSuggest()" />
          <label className="btn btn-outline-dark" htmlFor="suggestlink">Get Suggestion</label>

          <input type="radio" className="btn-check" name="btnradio" id="logout"  onClick={logout}/>
          <label className="btn btn-outline-primary" htmlFor="logout">Log Out</label>
        </div>
      </ul>
    </div>
  )
}

export default Navbar