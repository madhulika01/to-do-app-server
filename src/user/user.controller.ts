import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MongoExceptionFilter } from 'src/filters/mongo.filter';

import { UserSignInDTO } from './dto/user-signIn.dto';
import { UserSignUpDTO } from './dto/user-signUp.dto';
import { UserService } from './user.service';

@Controller('users')
@UseFilters(MongoExceptionFilter)
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signUp')
  @UsePipes(ValidationPipe)
  signUp(@Body() userSignUpDTO: UserSignUpDTO) {
    return this.userService.signUp(userSignUpDTO);
  }

  @Post('signIn')
  @UsePipes(ValidationPipe)
  signIn(@Body() userSignInDTO: UserSignInDTO) {
    return this.userService.signIn(userSignInDTO);
  }

  @Patch(':id')
  updateUser(@Param('id') id) {
    return this.userService.updateUser(id);
  }
}
