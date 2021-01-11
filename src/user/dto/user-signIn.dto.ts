import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class UserSignInDTO {
  @IsEmail()
  emailId: string;

  @MinLength(8)
  @MaxLength(20)
  password: string;
}
