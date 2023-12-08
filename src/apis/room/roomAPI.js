import axiosClient from 'utils/axios';

const endpoint = '/room';

export default {
  async getAllRoom() {
    const path = `${endpoint}/all`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async getCateByRoom(payload) {
    const path = `${endpoint}/getCateByRoom/${payload.id}`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
