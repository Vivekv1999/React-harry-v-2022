import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return ( //------l-12 use {`js ma lakhu `}
    <nav className={`navbar navbar-expand-lg navbar-${props.modee} bg-${props.modee}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">  ========>git page vala vakahte ==lac-17 vakahte commet kary   <=====%^$=======
              <a className="nav-link" href="About" >{props.abouttext}</a>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className="d-flex ">
            <div className="bg-primary rounded mx-2" style={{height:"30px",width:"30px"}}>

            </div>
          </div>
          <div className={`form-check form-switch text-${props.modee==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.togglemodeee} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
