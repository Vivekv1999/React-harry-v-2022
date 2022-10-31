import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [credential, setcredential] = useState({ email: " ", password: " " })
    const nevigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            nevigate('/')
        }
    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="conatiner" >
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" >Email address</label>
                        <input type="email" className="form-control" name="email" value={credential.email} onChange={onchange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credential.password} onChange={onchange} name="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}
