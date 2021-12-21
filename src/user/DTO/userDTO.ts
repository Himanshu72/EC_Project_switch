export class userDTO{
    email:string; //email
    DOB:String;
    Firstname:String;
    Gender:String;
    Country:String;
    FoodPreference:String;
    Height:Number;
    Weight:Number;
    Password:String;
};
export class userDietDTO{
    Lunch:[String];
    Dinner:[String];
    Snack:[String];
    Breakfast:[String];
    Requiredcalories:Number;
    _id:String;

};