import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export const getProjects  = ()     => api.get('/projects')
export const getFeatured  = ()     => api.get('/projects/featured')
export const getSkills    = ()     => api.get('/skills')
export const sendContact  = (data) => api.post('/contact', data)
