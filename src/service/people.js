import { api } from './api'

//export const getPeople = user => api.get(`users/${user}/repos`)
export const getPeople = char => api.get(`people/${char}`)


