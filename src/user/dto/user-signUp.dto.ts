import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class UserSignUpDTO {
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsEmail()
  emailId: string;

  @MinLength(8)
  password: string;
}
