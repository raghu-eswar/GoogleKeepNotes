import axios from 'axios';
import * as userApiConstants from '../apiConstants/userApiConstants';

export function signUp(signUpData) {
    return axios.post(process.env.API_BASE_URL + userApiConstants.authentication.signUp, signUpData)
}

export function logIn(logInData) {
    return axios.post(process.env.API_BASE_URL + userApiConstants.authentication.logIn, logInData)
}

export function uploadProfileImage(imageData, token) {
    return axios.post(process.env.API_BASE_URL + userApiConstants.service.uploadProfileImage, imageData, {
        headers: {Authorization: token,}
      })
}