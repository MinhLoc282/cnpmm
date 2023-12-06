import axiosClient from 'utils/axios';

const endpoint = '/cart';

export default {
  async addToCart(payload) {
    const path = `${endpoint}/addtoCart`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async getCart() {
    const path = `${endpoint}/getCart`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async emptyCart() {
    const path = `${endpoint}/emptyCart`;

    const response = await axiosClient.delete(path);

    return response.data;
  },

  async removeProductInCart(payload) {
    const path = `${endpoint}/removeProductInCart`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },

  async updateCart(payload) {
    const path = `${endpoint}/updateCart`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },
};
