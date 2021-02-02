import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/db/user.schema';
import { UserSignInDTO } from './dto/user-signIn.dto';
import { UserSignUpDTO } from './dto/user-signUp.dto';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signIn(userSignInDTO: UserSignInDTO) {
    const user = await this.userModel.findOne({
      emailId: userSignInDTO.emailId,
    });
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    if (this.checkPassword(user, userSignInDTO.password)) {
      // return token
      return 'Authenticated';
    } else {
      return 'wrong details';
    }
  }

  async signUp(userSignUpDTO: UserSignUpDTO): Promise<User> {
    const user = new this.userModel(userSignUpDTO);

    console.log(user);

    await user.save();
    return user;
  }

  updateUser(id) {
    return `User with "${id}" is updated`;
  }

  private checkPassword(user: User, password: string) {
    return bcrypt.compareSync(password, user.encrypted_password);
  }
}
