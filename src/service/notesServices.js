import axios from 'axios';
import { notesApiConstants } from '../apiConstants/notesApiConstants';

export function addNotes(note, token) {
    return axios.post(process.env.API_BASE_URL + notesApiConstants.addNotes, note, {
        headers: {Authorization: token,}
    })
}
export function getNotesList(token) {
    return axios.get(process.env.API_BASE_URL + notesApiConstants.getNotesList, {
        headers: {Authorization: token,}
    })
}