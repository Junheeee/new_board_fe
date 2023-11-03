export interface IBoardListRs {
  boardSno: number;
  title: string;
  regDate: string;
  cstmrNm: number;
  ctgrDivCd: string;
  views: number;
}

export interface IBoardCreateRq {
  title: string;
  content: string;
  cstmrSno: number;
  ctgrDivCd: string;
}

export interface IBoardDetailRs {
  boardSno: number;
  title: string;
  content: string;
  cstmrSno: number;
  cstmrNm: string;
  regDate: string;
  ctgrDivCd: string;
  views: number;
}

export interface IBoardUpdateRq {
  boardSno: number;
  title: string;
  content: string;
  ctgrDivCd: string;
}

export interface IBoardCtgrRs {
  ctgrDivCd: string;
  ctgrNm: string;
}
