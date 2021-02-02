import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
const bcrypt = require('bcrypt');
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ unique: true, required: true })
  emailId: string;

  @Prop({ required: true })
  encrypted_password: string;

  @Prop({ required: true })
  salt: string;

  @Prop({
    type: [{ title: String, description: String, complete: Boolean }],
    default: [],
    required: true,
  })
  tasks;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('password').set(function (password) {
  this.salt = bcrypt.genSaltSync(10);
  if (password === '') {
    this.encrypted_password = '';
  } else {
    this.encrypted_password = bcrypt.hashSync(password, this.salt);
  }
});
