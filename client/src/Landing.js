import React, { useState } from 'react';
import Home from './Home'
import axios from './axios'

function Landing (props) {
  const [onLog, setLog] = useState(true)
  const [emailLogData, setEmailLogData] = useState()
  const [passwordLogData, setPasswordLogData] = useState()
  const [nameRegData, setNameRegData] = useState()
  const [emailRegData, setEmailRegData] = useState()
  const [passwordRegData, setPasswordRegData] = useState()
  const emailLog = (e) => { setEmailLogData(e.target.value) }
  const passwordlog = (e) => { setPasswordLogData(e.target.value) }
  const namereg = (e) => { setNameRegData(e.target.value) }
  const emailreg = (e) => { setEmailRegData(e.target.value) }  
  const passwordreg = (e) => { setPasswordRegData(e.target.value) }
  const login = (e) => {
    e.preventDefault()
    const data = { email: emailLogData, password: passwordLogData}
    // console.log(data)
    axios({
      url: '/login',
      method: 'POST',
      data: data
    })
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token)
      props.setPage(<Home />)
      props.setOnLogin(false)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const register = (e) => {
    e.preventDefault()
    const data = {name: nameRegData, 
                  email: emailRegData, 
                  password: passwordRegData}
    axios({
      method: 'POST',
      url: '/register',
      data: data
    })
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token)
      props.setPage(<Home />)
      props.setOnLogin(false)
    })
    .catch(err => {
      console.log(err)
    })
  }
  // const onSignIn = (googleUser) => {
  //   console.log('signed in')
  //   const id_token = googleUser.getAuthResponse().id_token;
  //   axios({
  //     method: 'POST',
  //     url: '/google-login',
  //     data: {
  //         id_token
  //     }
  //   })
  //   .then(res => {
  //       localStorage.setItem('access_token', res.data.access_token)
  //       props.setPage(<Home />)
  //   })
  //   .catch(err => {

  //   })
  //   .then(_=> {

  //   })

  // }

  if (onLog) {
    return (
      <div className="mt-4" id="landing(e)">
      <form id="formlogin" onSubmit={login}>
        <div className="form-group">
          <label htmlFor="emaillog">Email address</label>
          <input type="email" className="form-control" onChange={emailLog} />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="passwordlog">Password</label>
          <input type="password" className="form-control" onChange={passwordlog}/>
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
        <div className="g-signin2 mt-2" data-onsuccess="onSignIn"></div>
        {/* <div id="error-log">
        </div> */}
      </form>
      </div>
    )
  } else {
    return (
      <div className="mt-4" id="landing">
  
        <form onSubmit={register}>
          <div className="form-group">
              <label htmlFor="namereg">Name</label>
              <input type="text" className="form-control" onChange={namereg} />
            </div>
          <div className="form-group">
            <label htmlFor="emailreg">Email address</label>
            <input type="email" className="form-control" onChange={emailreg} />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="passwordreg">Password</label>
            <input type="password" className="form-control" onChange={passwordreg} />
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
          <div className="g-signin2 mt-2" data-onsuccess="onSignIn"></div>
          {/* <div id="errorlog">
          </div> */}
        </form>
      </div>
    )
  }
}

export default Landing