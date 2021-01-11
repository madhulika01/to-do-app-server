import { Injectable } from '@nestjs/common';
import { json } from 'express';
import { UserSignInDTO } from './dto/user-signIn.dto';
import { UserSignUpDTO } from './dto/user-signUp.dto';

@Injectable()
export class UserService {
  private users: Array<any> = [];
  signIn(userSignInDTO: UserSignInDTO) {
    return userSignInDTO;
  }

  signUp(userSignUpDTO: UserSignUpDTO) {
    return userSignUpDTO;
  }

  updateUser(id) {
    return `User with "${id}" is updated`;
  }
}
