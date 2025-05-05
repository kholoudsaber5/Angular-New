import { IfStmt } from "@angular/compiler";
import { IsubCategories } from "./isub-categories";
import { ICategory } from "./icategory";
import { Ibrand } from "./ibrand";

export interface Iproduct {

    sold: number ;
    images : string [];
    subcategory :IsubCategories[] ;
   
    ratingsQuantity :number;
    _id :string ;
    title:string ;
    description : string ;
    quantity : number ;
    price :number ;
    priceAfterDiscount : number ;
    imageCover :string ;
    category : ICategory ;
    brand:Ibrand ;
    ratingsAverage : number ;

}
