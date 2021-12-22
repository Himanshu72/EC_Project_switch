import * as mongoose from 'mongoose'
 export const altSchema= new mongoose.Schema({
     _id:{type:String,required:true},
     data:[String]
 })