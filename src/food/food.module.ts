import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { foodSchema } from './schemas/schema.food';
import { diskStorage } from 'multer';
import { altSchema } from './schemas/schema.alt';

@Module({
  imports: [MulterModule.register({
    dest: './public'
  }),
  MongooseModule.forFeature([{name:"food",schema:foodSchema},{name:"alt",schema:altSchema}])
],
  providers: [FoodService],
  controllers: [FoodController],
})
export class FoodModule {}
