import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    Email:{type:String,required:true,unique:true},
    DOB:{type:Date,required:true},
    Firstname:{type:String,required:true,minLength:3,maxLength:50},
    Gender:{type:String,required:true, enum: ['Male', 'Female','Other']},
    Country:{type:String,required:true,minLength:3,maxLength:50},
    FoodPreference:{type:String,required:true,enum: ['NonVeg', 'Veg']},
    Height:{type:Number,required:true},
    Weight:{type:Number,required:true},
    Password:{type:String,required:true}
  });