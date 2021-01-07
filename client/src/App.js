import React, { useState, useEffect } from 'react';
import Landing from './Landing'
import Home from './Home'
import Navbar from './components/navbar'

// import './App.css';

function App() {
  const auth = localStorage.getItem('access_token')
  const [page, setPage] = useState('Landing')
  const [onLogin, setOnLogin] = useState(true)
  const backHome = () => {
    setPage(<Home setPage={setPage} backHome={backHome} />)
  }
  useEffect(()=> {
    auth ? setPage(<Home setPage={setPage} backHome={backHome} />) : setPage(<Landing setPage={setPage} setOnLogin={setOnLogin} />)
    auth && setOnLogin(false)
  }, [auth])

  return (
    <div className="App">
      <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-2">
              </div>
              <div className="col-md-auto">
              <h1 className="mt-5 md-5" style={{textAlign: 'center'}}>To Do App</h1>
               {page}
               {!onLogin && <Navbar setPage={setPage} backHome={backHome} page={page} />}
              </div>
              <div className="col col-lg-2">
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
