export interface AuthInterface {
  username: string;
  password: string;
}
export interface authPayload {
  username: string;
}
export class Auth implements AuthInterface {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
