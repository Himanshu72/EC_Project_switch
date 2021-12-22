import { HttpException, HttpStatus } from "@nestjs/common";
import * as TeachableMachine from "@sashido/teachablemachine-node";
import keys from "src/config/key";
const model = new TeachableMachine({
  modelUrl:"https://teachablemachine.withgoogle.com/models/RJSvtvx8O/"
});
 export const  Predict=async (image)=>{
  try{
      console.log("--->",image);
    let res=await model.classify({
	        imageUrl:keys.hostURI+image ,
      });
      return res[0];
    }
    catch(e){
        console.log(e)
        throw new HttpException({status:500,error:"Error Occur In Image Recognizer"},500)
    }
}