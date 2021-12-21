import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import  keys  from '../config/key'
import { UserModule } from 'src/user/user.module';
import { DietMiddleware } from 'src/diet.middleware';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI),UserModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DietMiddleware)
      .forRoutes({ path: '/user/:userID/diet',method:RequestMethod.GET},
      { path: '/diet',method:RequestMethod.PUT},
      { path: '/user',method:RequestMethod.PUT}
      );
  } 
}
