import axiosClient from 'utils/axios';

const endpoint = '/user/wishlist';

export default {
  async getUserWishlist() {
    const path = endpoint;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async updateUserWishlist(payload) {
    const path = endpoint;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },
};
