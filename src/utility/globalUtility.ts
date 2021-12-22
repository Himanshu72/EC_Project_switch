import * as fs from "fs"
export  default class GlobalUtility{
        static deletFile(filename){
                try{
                    fs.unlinkSync("./public/"+filename);
                }catch(err){
                    console.error(err);
                }

            }

};