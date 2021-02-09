import axios from 'axios';
import { SIGN_IN, SIGN_UP, AUTO_SIGN_IN } from '../types';
import { SIGNUP, SIGNIN, AUTOSIGNIN } from '../../component/form/utils/urls';

export function signUp(data) {
  const request = axios({
    method: 'POST',
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      //console.log(data);
      return response.data;
    })
    .catch(error => {
      //console.log(error.response);
      return error;
    });
  return {
    type: SIGN_UP,
    payload: request,
    // {
    //   email: 'admin@gmail.com',
    //   token: 'gladiatorinthehousejuststay',
    // },
  };
}
export function signIn(data) {
  const request = axios({
    method: 'POST',
    url: SIGNIN,
    data: {
      email: data.email,
      password: data.password,
      //returnSecureToken: true,
    },
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      // console.log(error.response);
      return error;
    });
  //console.log(request);
  return {
    type: SIGN_IN,
    payload: request,
    // {
    //   email: 'admin@gmail.com',
    //   token: 'gladiatorinthehousejuststay',
    // }, 
  };
}
export const autoSignIn = (id) => {
  console.log('id is', id);
  const request = axios({
    method: 'GET',
    url: AUTOSIGNIN + id.u_id,
    // data: {
    //   email: data.email,
    //   password: data.password,
    //   //returnSecureToken: true,
    // },
    // header: {
    //   'Content-Type': 'application/json', 
    // },
  })
    .then(response => {
      console.log('response is', response.data)
      return response.data;
    })
    .catch(error => {
      // console.log(response.error);
      return error;
    });
  return {
    type: AUTO_SIGN_IN,
    payload: request,
  };
};
