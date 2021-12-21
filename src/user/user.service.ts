import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { loginDTO } from './DTO/loginDTO';
import { userDietDTO, userDTO } from './DTO/userDTO';
import * as JWT from "jsonwebtoken"
import { config } from 'process';
import  Key  from '../config/key';
import { loginUserDTO } from './DTO/loginDTO';
@Injectable()
export class UserService {

    constructor
    (@InjectModel('User') private userModel:Model<userDTO>,
    @InjectModel('Diet') private dietModel:Model<userDietDTO>
    ){}  

    async createUser(userDTO:userDTO):Promise<userDTO>{
    const createdUser = new this.userModel(userDTO);
    let user= await createdUser.save();
    this.createDefaultDiet(user);    
    return user;
    }

    async login(email,password):Promise<loginUserDTO>{
        console.log(email,password);

        let loginuser= new loginUserDTO();
     let user=await this.userModel.findOne({email:email});
        if(user.Password!=password)
            throw new HttpException("Invalid Password",400);
      
      loginuser.user=user;        
    loginuser.token=JWT.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 2),
        data:  user
      }, Key.key);

     return loginuser;
    }

    calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }    

    async createDefaultDiet(user){
        //calculate calaroes
         let cal=(10*user.Weight)+(6.25*user.Height) - (5*this.calculateAge(user.DOB));
          if(user.Gender=="Male")
            cal=cal+5;
          else
            cal=cal-161;
        
           cal=cal*1.4;
           //End 
         //Tempalate  
        let dietTemplate={
            _id:user.id,
            Breakfast:["apple","milk","oats"],
            Lunch:["roti","pulses"],
            Snack:["egg","almonds"],
            Dinner:["soyachunks","rice"],
            Requiredcalories:cal

        }
        //end
        const createdDiet = new this.dietModel(dietTemplate);
        createdDiet.save();
    }

    async getUserDiet(userID){
        return this.dietModel.findOne({_id:userID});
    }
    async updateUserDiet(userDiet:userDietDTO){
        return this.dietModel.findOneAndUpdate({_id:userDiet._id},userDiet,{new: true});
    }
}
