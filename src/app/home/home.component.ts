import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Iproduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProduct  : Iproduct[] = [] ;
  searchItem : string ="";
  isLoading:boolean = false;


  constructor ( private _productservice : ProductService){}



 ngOnInit(){
  this.isLoading = true
  this._productservice.getAllProduct().subscribe({
    next :(Response) => {
      this. allProduct = Response.data ;
      this.isLoading = false
    },
    error :(err) => {console.log (err)
      this.isLoading = false
    },
  })

  

 
 
   
 }
}
