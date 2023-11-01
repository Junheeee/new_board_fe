export interface IBoardList {
  boardSno: number;
  title: string;
  regDate: string;
  regUser: string;
  ctgrDivCd: string;
  views: number;
}

export interface IBoardRegister {
  boardSno: number;
  title: string;
  content: string;
  regUser: string;
  ctgrDivCd: string;
}
