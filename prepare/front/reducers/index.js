import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPost: [],
  }
}
// const initialState = {
//   name: 'shkim',
//   age: 40,
//   password: 'babo'
// };
// const chnageNickname = {
//   type: 'CHANGE_NICKNAME',
//   data: 'boogikim'
// }

//action creator
// const changeNickname = (data) => {
//   return {
//     type: 'CHANGE_NICKNAME',
//     data
//   }
// };
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

// (이전상태, 액션) --> 다음상태를 생성
const rootReducer = ((state=initialState, action)=>{
  switch( action.type) {
    case HYDRATE:
        console.log('HYDRATE', action);
        return {...state, ...action.payload };
      break;
    case 'LOG_IN':
      return {
        ...state,
        user:{
          ...state.user,
          isLoggedIn: true,
          user: action.data
        }
      }
    break;
    case 'LOG_OUT':
      return {
        ...state,
        user:{
          ...state.user,
          isLoggedIn: false,
          user: null
        }
      }
    break;
    default:
      return state;
    // case 'CHANGE_NICKNAME':
    //   return {
    //     ...state,
    //     name: action.data
    //   }
    //   break;
  }
});

export default rootReducer;