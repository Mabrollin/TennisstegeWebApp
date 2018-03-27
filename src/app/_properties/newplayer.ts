export class NewPlayer {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
  constructor(username: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
  passwordConfirm: string) {

    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
  equals(other: NewPlayer): boolean  {
    return this.username === other.username
    && this.firstName === other.firstName
    && this.lastName === other.lastName
    && this.email === other.email
    && this.phoneNumber === other.phoneNumber;
  }
}
