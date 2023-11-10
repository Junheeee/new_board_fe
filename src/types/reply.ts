export interface IReplyList {
  rplySno: number;
  trgReplySno: number;
  reply: string;
  cstmrSno: number;
  cstmrNm: string;
  regDt: string;
  updDt: string;
  childRplyList: IReplyList[];
}

export interface IReplyListRs {
  replyList: IReplyList[];
  cnt: number;
}

export interface IReplyCreateRq {
  brdSno: number;
  trgRplySno: number;
  reply: string;
  cstmrSno: number;
}
