import axiosClient from 'utils/axios';

const endpoint = '/coupon';

export default {
  async getCoupon(payload) {
    const path = `${endpoint}/${payload.code}`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
