const API_URL = "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${API_URL}/user`).then(response => response.json());
};


