import React, { useState } from 'react'
import styles from '../../public/css/login.module.css'
import loginUser from '../utils/loginUser'
import setToken from '../utils/setToken'

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    e.preventDefault()
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await loginUser(userInfo).then((res) => {
      return res.data.token
    })
    setToken(token)
  }

  return (
    <div className={styles['login-wrapper']}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Username</p>
          <input name="username" type="text" value={userInfo.username} onChange={handleChange} />
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
