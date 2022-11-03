import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
  const [credential, setcredential] = useState({ email: " ", password: " ", cpassword: " " })
  const nevigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault()
    const {name,email,password,cpassword}=credential
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
      localStorage.setItem('token', json.authtoken)
      nevigate('/')
      props.showAlert("account created succesfully","success")
    }
    else{
      console.log('not sign innn');
      
      props.showAlert("invalid creadiantial",'danger')
    }
  }

  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }

  return (
    <div>
       <h2>signup to continue to iNotebook</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" onChange={onchange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" onChange={onchange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={onchange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">confirm Password</label>
          <input type="password" className="form-control" name="cpassword" onChange={onchange} minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
