import { HttpCode, HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import keys from './config/key';
import * as JWT from "jsonwebtoken"
@Injectable()
export class DietMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
   
  
    const token=req.headers.authorization;
   // console.log(token)
    if(!token)
        throw new HttpException("Please provide jwt token",400)
    try{
        var decoded = JWT.verify(token, keys.key); 
        next();
      }
    catch(e){
      console.log(e);
      throw new HttpException("Invalid Token",400)
    }
  }
}
