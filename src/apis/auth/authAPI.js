import axiosClient from 'utils/axios';

const endpoint = '/user';

export default {
  async login(payload) {
    const path = `${endpoint}/loginUser`;

    const response = await axiosClient.post(path, payload, {
      withCredentials: true,
    });

    return response.data;
  },

  async register(payload) {
    const path = `${endpoint}/register`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async refreshToken() {
    const path = `${endpoint}/refresh`;

    const response = await axiosClient.get(path, {
      withCredentials: true,
    });

    return response.data;
  },

  async logout() {
    const path = `${endpoint}/logout`;

    const response = await axiosClient.post(path);

    return response.data;
  },
};
