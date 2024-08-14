import axios from "axios";
const baseUrl = "http://localhost:9090/user";

class UserService {
  signIn(credentials) {
    return axios.post(`${baseUrl}/signIn`, credentials, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // If the backend requires cookies or other credentials

    });
  }

  signUp(credentials){
    return axios.post(`${baseUrl}/signUp`, credentials, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // If the backend requires cookies or other credentials

    });
  }

  getByEmail(email) {
    return axios.get(`${baseUrl}/findByEmail`, {
      params: { email },
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true ,// If the backend requires cookies or other credentials
      maxRedirects: 0 // Prevent automatic redirection handling by axios

    });
  }
}

export default new UserService();
