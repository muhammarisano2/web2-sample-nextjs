import { useState } from "react";
import axios from 'axios'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const hanleLogin = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/v1/users/login',form, {withCredentials: true} )
        .then(()=>{
            alert('login succes')
        })
        .catch(()=>{
            alert('login gagal')
        })
    }
  return (
    <div>
      <h1>page login</h1>
      <form onSubmit={hanleLogin}>
      <ul>
        <li>
          <input type="email" name="email" id="email" value={form.email} placeholder="email" onChange={handleChange} />
        </li>
        <li>
          <input
            type="password"
            name="password"
            value={form.password}
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
        </li>
      </ul>
      <button onClick={hanleLogin}>login</button>
      </form>
    </div>
  );
};

export default Login;
