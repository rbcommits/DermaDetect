export const loginUser = (user) => {
  return {
    type: 'LOGIN',
    username: user.name,
    userType: user.usertype
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
}