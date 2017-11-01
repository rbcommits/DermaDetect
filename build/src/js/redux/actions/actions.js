export const loginUser = (user) => {
  return {
    type: 'LOGIN',
    username: user.name,
    userType: user.type
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
}