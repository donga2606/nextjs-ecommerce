const setToken = (userToken): void => {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

export default setToken
