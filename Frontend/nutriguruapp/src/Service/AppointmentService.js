import axios from "axios";

var baseUrl = "http://localhost:9090/appointment";
class AppointmentService {
  bookAppointment = (data) => {
    return axios.post(baseUrl + "/bookAppointment", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // If the backend requires cookies or other credentials
    });
  };

  getAll = (id) => {
    return axios.get(`${baseUrl}/getAll/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  };
}

export default new AppointmentService();
