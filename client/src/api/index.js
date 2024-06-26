import axios from 'axios'

const API=axios.create({baseURL:'https://memories-app-lg5p.vercel.app/'})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts=()=>API.get('/posts');
export const  createPost=(post)=>API.post('/posts',post)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost=(id)=>API.delete(`/posts/${id}`)

export const signIn=(formData)=>API.post('/user/signin',formData)
export const signUp=(formData)=>API.post('/user/signup',formData)
