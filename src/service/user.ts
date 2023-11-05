import { useMutation, useQuery } from '@tanstack/react-query';
import { IUserJoinRq } from '../types/user';
import axiosInstance from '../utils/axiosInterceptor';

const POST_USER_JOIN = 'post/user/join';

const userApi = {
  postUserJoinKey: POST_USER_JOIN,
  postUserJoinFn: async (data: IUserJoinRq): Promise<number> => {
    const res = await axiosInstance.post('/user/join', data);
    return res.data;
  },
  PostUserJoin: function () {
    return useMutation([this.postUserJoinKey], this.postUserJoinFn);
  }
};
export default userApi;
