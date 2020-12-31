import React, { useState } from 'react';

function Landing () {
  const [onLog, setLog] = useState(true)
  const login = (data) => {
    fetch()
  }
  const onSignIn = (googleUser) => {
    // const id_token = googleUser.getAuthResponse().id_token;
  }

  if (onLog) {
    return (
      <div className="mt-4" id="landing">
      <form id="formlogin" onSubmit={login}>
        <div className="form-group">
          <label htmlFor="emaillog">Email address</label>
          <input type="email" className="form-control" id="emaillog" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="passwordlog">Password</label>
          <input type="password" className="form-control" id="passwordlog"/>
          <small id="helplog" className="form-text text-muted" style={{display: 'none'}}></small>
        </div>
        
        
        <div className="d-flex flex-row gap-1">
          <div>
          <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div>
          <button type="button" className="btn btn-danger" onClick={(e)=> {e.preventDefault() ;  setLog(false)}}>I Don't Have an Account</button>
          </div>
        </div>
        <div className="form-text text-muted text-center mt-2 mb-3">
          <small>- or login with your google account -</small>
        </div>
        <div className="g-signin2 mt-2" data-onsuccess={onSignIn}></div>
        {/* <div id="error-log">
        </div> */}
      </form>
      </div>
    )
  } else {
    return (
      <div className="mt-4" id="landing">
  
        <form id="formregister">
          <div className="form-group">
              <label htmlFor="namereg">Name</label>
              <input type="text" className="form-control" id="namereg" />
            </div>
          <div className="form-group">
            <label htmlFor="emailreg">Email address</label>
            <input type="email" className="form-control" id="emailreg" />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="passwordreg">Password</label>
            <input type="password" className="form-control" id="passwordreg" />
          </div>
          <div className="d-flex flex-row gap-1">
            <div>
            <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <div>
            <button type="button" className="btn btn-success" onClick={(e)=> {e.preventDefault() ; setLog(true)}}>I Have an Account</button>
            </div>
          </div>          
          <div className="form-text text-muted text-center mt-2 mb-3">
            <small>- or login with your google account -</small>
          </div>
          <div className="g-signin2 mt-2" data-onsuccess={onSignIn}></div>
          {/* <div id="errorlog">
          </div> */}
        </form>
      </div>
    )
  }
}

export default Landing