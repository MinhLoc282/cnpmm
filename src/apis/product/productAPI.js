import axiosClient from 'utils/axios';

const endpoint = '/product';

export default {
  async getAllProduct(payload) {
    const path = `${endpoint}/getAllProduct`;

    const response = await axiosClient.get(path, { params: payload });

    return response.data;
  },

  async getProductDetail(payload) {
    const path = `${endpoint}/product-detail/${payload.slug}`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async getProductCategory(payload) {
    const path = `${endpoint}/category/${payload.id}`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async getProductRoom(payload) {
    const path = `${endpoint}/room/${payload.id}`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
