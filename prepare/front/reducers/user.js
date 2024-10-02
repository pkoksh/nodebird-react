export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data
  }
}
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  }
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOG_IN':
      return {
          ...state,
          isLoggedIn: true,
          user: action.data
      }
    break;
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    break;
    default:
      return {
        ...state
      };
      break;
  }
}

export default reducer;