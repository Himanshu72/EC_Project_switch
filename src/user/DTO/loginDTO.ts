import { userDTO } from "./userDTO";
export class loginDTO{
    public Email:string; 
    public Password:String;

};

export class loginUserDTO{
    user:userDTO;
    token:String;
}