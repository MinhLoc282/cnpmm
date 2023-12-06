import axiosClient from 'utils/axios';

const endpoint = '/category';

export default {
  async getAllCategory() {
    const path = `${endpoint}/all`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
