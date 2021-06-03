import axios from 'axios'
import React, { useState } from 'react'

async function loginUser(credentials) {
  const url = 'http://localhost:4041/login'
  const args: Record<string, any> = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: credentials,
    url,
  }

  try {
    const res = await axios(args)
    return res
  } catch (err) {
    console.log(`Request login fail: ${err}`)
  }
}

export default loginUser
