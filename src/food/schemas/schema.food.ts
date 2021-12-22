import * as mongoose from 'mongoose'
 export const foodSchema= new mongoose.Schema({
    _id:String,
    Calories:Number,
    Cholesterol:Number,
    Sodium:Number,
    Potassium:Number,
    Protein:Number,
    VitaminA :String,
    VitaminC:String,
    Calcium:String,
    Iron:String,
    Fat:{
    TotalFat:Number,
	SaturatedFat:Number,
	TransFat:Number,
	PolyunsaturatedFat: Number,
	MonounsaturatedFat:Number,
    },
    Carb:{
        TotalCarbohydrates:Number,
	DietaryFiber:Number,
	Sugars:Number
    }
    
 });