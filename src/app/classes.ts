export class Citizen {
  id!: number;
  name!: string;
  dob!: Date;
  address!: string;
  emailId!: string;
  mobileNo!: string;
  gender!: string;
  isLoggedIn!: boolean;
  IsAlive!: boolean;
  aadharCard?: Aadhar;
  status!: string;
}

export class Aadhar {
  id!: string;
  issueDate!: Date;
  status!: string;
}

export class Admin {
  id!: number;
  adminName!: string;
  email!: string;
  password!: string;
  isLoggedIn!: boolean;
}
