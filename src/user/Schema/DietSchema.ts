import * as mongoose from 'mongoose';
export const DietSchema = new mongoose.Schema({
    _id:String,//userID
     Breakfast:{type:[String],required:true},
     Lunch:{type:[String],required:true},
     Dinner:{type:[String],required:true},
     Snack:{type:[String],required:true},
     Requiredcalories:{type:Number,required:true}
  });