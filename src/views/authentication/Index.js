import { useState } from 'react'
import  React from "react";
import { useHistory } from 'react-router-dom'
const Auth = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const inputGroupChangeHandler = (event) => {
    console.log(event.target)
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const saveDate = (e) => {
    e.preventDefault();
    history.push('/')
  }

 
  return (
    <div className="container-fulid px-4">
      <form onSubmit={saveDate}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={user.name} name="name" onChange={inputGroupChangeHandler} className="form-control" required/>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" value={user.email} name="email" className="form-control" onChange={inputGroupChangeHandler} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Auth
