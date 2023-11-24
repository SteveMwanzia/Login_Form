import React, { useCallback, useState } from 'react'

const Form = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChange2 = (e) => {
    setEmail(e.target.value)
  }

  const handleChange3 = (e) => {
    setPassword(e.target.value)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(value && email && password)) {
      alert("Error: Fields Cannot be Empty ")
      return
    }
    alert(`Welcome : ${value}`)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2><br />
      <div>
        <label>Name:</label><br />
        <input value={value}
        onChange={handleChange}
        type="text"
        />
      </div>
      <div>
        <label>Email:</label><br />
        <input value={email}
        onChange={handleChange2}
        type="Email"
        />
      </div>
      <div>
        <label >Password:</label><br />
        <input value={password}
        onChange={handleChange3}
        type="password"
        />
      </div><br />

      {/* disabled={!(value && email && password)} */}
      <button  type='Submit'>Login</button>
      
    </form>
  )
}

export default Form