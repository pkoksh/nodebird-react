import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from './user';
import post from './post';

// (이전상태, 액션) --> 다음상태를 생성
const rootReducer = combineReducers(
 { 
  index: ((state=initialState, action)=>{
  switch( action.type) {
    case HYDRATE:
        console.log('HYDRATE', action);
        return {...state, ...action.payload };
      break;
   
    default:
      return state;
  }
  }),
  user,
  post
});

export default rootReducer;