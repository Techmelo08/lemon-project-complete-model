import { SIGN_IN, SIGN_UP, AUTO_SIGN_IN } from '../types';
import { act } from 'react-test-renderer';
import { cos } from 'react-native-reanimated';

export default function (state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      console.log('Action is', action);
      return {
        ...state,
        auth: {
          userId: action.payload[0] || false,
        },
      };
    case SIGN_UP:
      return {
        ...state,
        auth: {
          userId: action.payload.localId || false,
          // email: action.payload.email || false,
          // token: action.payload.idToken || false,
          // refreshToken: action.payload.refreshToken || false,
          // email: action.payload.email || false,
          // token: action.payload.token || false,
        },
      };
    case AUTO_SIGN_IN:
      console.log('Action at Auto Sign In', action);
      return {
        ...state,
        auth: {
          userId: action.payload[0] || false,
        },
        // token: {
        //   getToken: action.payload[1]
        // }
      };
    default:
      return state;
  }
}
