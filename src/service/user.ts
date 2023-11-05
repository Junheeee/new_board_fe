import { useMutation, useQuery } from '@tanstack/react-query';
import { IUserJoinRq, IUserLoginRq } from '../types/user';
import axiosInstance from '../utils/axiosInterceptor';

const POST_USER_JOIN = 'post/user/join';
const POST_USER_LOGIN = 'post/user/login';

const userApi = {
  postUserJoinKey: POST_USER_JOIN,
  postUserJoinFn: async (data: IUserJoinRq): Promise<number> => {
    const res = await axiosInstance.post('/user/join', data);
    return res.data;
  },
  PostUserJoin: function () {
    return useMutation([this.postUserJoinKey], this.postUserJoinFn);
  },

  postUserLoginKey: POST_USER_LOGIN,
  postUserLoginFn: async (data: IUserLoginRq): Promise<boolean> => {
    const res = await axiosInstance.post('/user/login', data);
    return res.data;
  },
  PostUserLogin: function () {
    return useMutation([this.postUserLoginKey], this.postUserLoginFn);
  }
};
export default userApi;
