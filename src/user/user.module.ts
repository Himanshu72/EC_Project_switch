import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './Schema/UserSchema';
import { DietSchema } from './Schema/DietSchema';

@Module({
  imports:[MongooseModule.forFeature([{ name: "Diet", schema: DietSchema},{ name: "User", schema: UserSchema}])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
