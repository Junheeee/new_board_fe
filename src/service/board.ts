import { useMutation, useQuery } from '@tanstack/react-query';
import {
  IBoardCreateRq,
  IBoardCtgrRs,
  IBoardDetailRs,
  IBoardListRs,
  IBoardUpdateRq
} from '../types/board';
import axiosInstance from '../utils/axiosInterceptor';

const GET_BOARD_LIST = 'get/board/list';
const POST_BOARD_CREATE = 'post/board/create';
const GET_BOARD_DETAIL = 'get/board/detail';
const POST_BOARD_UPDATE = 'post/board/update';
const GET_BOARD_DELETE = 'get/board/delete';
const POST_BOARD_VIEWS = 'get/board/views';

const GET_CTGR_LIST = 'get/ctgr/list';

const boardApi = {
  getBoardListKey: GET_BOARD_LIST,
  getBoardListFn: async (
    ctgrDivCd: string | undefined
  ): Promise<IBoardListRs[]> => {
    const res = await axiosInstance.get(`/board/list?ctgrDivCd=${ctgrDivCd}`);
    return res.data;
  },
  GetBoardList: function (ctgrDivCd?: string) {
    return useQuery({
      queryKey: [this.getBoardListKey],
      queryFn: () => this.getBoardListFn(ctgrDivCd),
      initialData: [],
      enabled: !!ctgrDivCd
    });
  },

  postBoardCreateKey: POST_BOARD_CREATE,
  postBoardCreateFn: async (data: IBoardCreateRq): Promise<number> => {
    const res = await axiosInstance.post('/board/create', data);
    return res.data;
  },
  PostBoardCreate: function () {
    return useMutation([this.postBoardCreateKey], this.postBoardCreateFn);
  },

  getBoardDetailKey: GET_BOARD_DETAIL,
  getBoardDetailFn: async (boardSno: number): Promise<IBoardDetailRs> => {
    const res = await axiosInstance.get(`/board/detail?boardSno=${boardSno}`);
    return res.data;
  },
  GetBoardDetail: function (boardSno: number) {
    return useQuery({
      queryKey: [this.getBoardDetailKey],
      queryFn: () => this.getBoardDetailFn(boardSno)
    });
  },

  postBoardUpdateKey: POST_BOARD_UPDATE,
  postBoardUpdateFn: async (data: IBoardUpdateRq): Promise<number> => {
    const res = await axiosInstance.post('/board/update', data);
    return res.data;
  },
  PostBoardUpdate: function () {
    return useMutation([this.postBoardUpdateKey], this.postBoardUpdateFn);
  },

  getBoardDeleteKey: GET_BOARD_DELETE,
  getBoardDeleteFn: async (boardSno: number): Promise<number> => {
    const res = await axiosInstance.get(`/board/delete?boardSno=${boardSno}`);
    return res.data;
  },
  GetBoardDelete: function () {
    return useMutation([this.getBoardDeleteKey], this.getBoardDeleteFn);
  },

  getCtgrListKey: GET_CTGR_LIST,
  getCtgrListFn: async (): Promise<IBoardCtgrRs[]> => {
    const res = await axiosInstance.get('/board/ctgrList');
    return res.data;
  },
  GetCtgrList: function () {
    return useQuery({
      queryKey: [this.getCtgrListKey],
      queryFn: () => this.getCtgrListFn()
    });
  },

  postBoardViewsKey: POST_BOARD_VIEWS,
  postBoardViewsFn: async (boardSno: number): Promise<number> => {
    const res = await axiosInstance.post(
      `/board/updateViews?boardSno=${boardSno}`
    );
    return res.data;
  },
  PostBoardViews: function () {
    return useMutation([this.postBoardViewsKey], this.postBoardViewsFn);
  }
};

export default boardApi;
