import { useMutation, useQuery } from '@tanstack/react-query';
import { IReplyCreateRq, IReplyListRs } from '../types/reply';
import axiosInstance from '../utils/axiosInterceptor';

const GET_REPLY_LIST = 'get/reply/list';
const POST_REPLY_CREATE = 'post/reply/create';
const POST_REPLY_UPDATE = 'post/reply/update';
const GET_REPLY_DELETE = 'get/reply/delete';

const replyApi = {
  getReplyListKey: GET_REPLY_LIST,
  getReplyListFn: async (brdSno: number): Promise<IReplyListRs> => {
    const res = await axiosInstance.get(`/reply/list?brdSno=${brdSno}`);
    return res.data;
  },
  GetReplyList: function (brdSno: number) {
    return useQuery({
      queryKey: [this.getReplyListKey],
      queryFn: () => this.getReplyListFn(brdSno),
      enabled: !!brdSno
    });
  },

  postReplyCreateKey: POST_REPLY_CREATE,
  postReplyCreateFn: async (data: IReplyCreateRq): Promise<number> => {
    const res = await axiosInstance.post('/reply/create', data);
    return res.data;
  },
  PostReplyCreate: function () {
    return useMutation([this.postReplyCreateKey], this.postReplyCreateFn);
  }
};

export default replyApi;
