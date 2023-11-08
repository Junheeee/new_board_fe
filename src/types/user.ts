export interface IUserJoinRq {
  loginId: string;
  loginPswd: string;
  cstmrNm: string;
}

export interface IUserLoginRq {
  loginId: string;
  loginPswd: string;
}

export interface IUserLoginRs {
  cstmrSno: number;
  loginId: string;
  cstmrNm: string;
}
