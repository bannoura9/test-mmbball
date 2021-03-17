import axios from "axios";

export default {
  deleteWorkouts: function (id) {
    return axios.delete(`/events/${id}`)
  },
  getUser: function () {
    return axios.get('/users')
      .then(res => {
        console.log(res.data)
      })
  }

};
