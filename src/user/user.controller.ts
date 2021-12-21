import { Body, Controller, Get, HttpCode, HttpException, Param, Post, Put } from '@nestjs/common';
import { loginDTO } from './DTO/loginDTO';
import { userDietDTO, userDTO } from './DTO/userDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService ){}
    @Post()
    async Create( @Body() userDTO:userDTO){
       return await this.userService.createUser(userDTO)
    }
    @Post("/login")
    async login(@Body() loginDTO){
        return this.userService.login(loginDTO.email,loginDTO.Password); 
    } 
    @Get("/:userID/diet")
    async getUserDiet(@Param('userID') userID: string){
           let diet= await this.userService.getUserDiet(userID);
           if(diet==undefined)
                throw new HttpException("Invalid Diet ID", 404)
           return diet; 
    }
    @Put("/diet")
    async updateDiet(@Body() userDietDTO){
            let updatedDiet=await this.userService.updateUserDiet(userDietDTO);
            return updatedDiet;
    }


}
