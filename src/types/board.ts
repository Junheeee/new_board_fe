export interface IBoardListRs {
  brdSno: number;
  title: string;
  regDt: string;
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
  brdSno: number;
  title: string;
  content: string;
  cstmrSno: number;
  cstmrNm: string;
  regDt: string;
  ctgrDivCd: string;
  views: number;
}

export interface IBoardUpdateRq {
  brdSno: number;
  title: string;
  content: string;
  ctgrDivCd: string;
}

export interface IBoardCtgrRs {
  ctgrDivCd: string;
  ctgrNm: string;
}
