import axios from "axios";

const API = axios.create({ baseURL: "http://165.22.214.30:9090" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Token ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);
// export const createPost = (newService) => API.post('/posts', newService);

export const signIn = (formData) => API.post("/api-token-auth/", formData);
export const signUp = (formData) => API.post("/api/v1/users/", formData);
export const fetchServices = () => API.get("/api/v1/services/");
export const fetchServiceField = (data) =>
  API.get(`/api/v1/services/fields/?service_name=${data}`);
