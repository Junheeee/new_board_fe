import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { IBoardList } from '../types/board';
import axiosInstance from '../utils/axiosInterceptor';

const GET_BOARD_LIST = 'get/board/list';

const boardApi = {
  getBoardListKey: GET_BOARD_LIST,
  getBoardListFn: async (): Promise<IBoardList[]> => {
    const res = await axiosInstance.get('/board/list');
    return res.data;
  },
  GetBoardList: function () {
    return useQuery({
      queryKey: [this.getBoardListKey],
      queryFn: () => this.getBoardListFn(),
      initialData: []
    });
  }
};

export default boardApi;
