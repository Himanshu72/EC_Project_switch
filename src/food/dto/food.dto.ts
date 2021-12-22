class fats{
    TotalFat:Number;
	SaturatedFat:Number;
	TransFat:Number;
	PolyunsaturatedFat: Number;
	MonounsaturatedFat:Number;
}
class carbs{
    TotalCarbohydrates:Number;
	DietaryFiber:Number;
	Sugars:Number;
}
export class Foodinfo{
    _id:String;
    Calories:Number;
    Cholesterol:Number;
    Sodium:Number;
    Potassium:Number;
    Protein:Number;
    VitaminA :String;
    VitaminC:String;
    Calcium:String;
    Iron:String;
    fat:fats;
    carb:carbs;
}
export class PostFoodDto {
    name: string;
}

export class PostFoodWithImageDto {
    name: string;
}

export class UpdateFoodDto {
    name: string;
}

export class UpdateFoodWithImageDto {
    name: string;
}

export class altFood{
    _id:String;
    data:[String];
}