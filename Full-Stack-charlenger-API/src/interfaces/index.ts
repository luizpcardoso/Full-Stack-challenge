export interface IUserCreate {
  username: string;
  password: string;
}

export interface IUser {
  user_id: string;
  username: string;
  password: string;
  account: any;
}

export interface IUserLogin {
  username: string;
  password: string;
}
