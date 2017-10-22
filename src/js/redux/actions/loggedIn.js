export default function loggedIn(state = {
  isTest: true
}, action) {
  switch(action.type) {
    case 'HELLO':
      return {
        ...state,
        isTest: false
      }
  }
  return state;
}