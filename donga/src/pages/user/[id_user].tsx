import { parse } from 'graphql'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import tokenApi from '../../../controller/TokenApi'

import Login from '../login'

const UserDetail = () => {
  // const [token, setToken] = useState<string>()

  const router = useRouter()

  useEffect(() => {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
  
    tokenApi.get(userToken, '')
  }, [])

  return (
    <>
      <h1>User</h1>
    </>
  )
}

export default UserDetail;
