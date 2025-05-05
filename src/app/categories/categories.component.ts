import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ICategory } from '../interfaces/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {
  isLoading : boolean = false ;

  allCategories:ICategory[]=[]

  constructor ( private  _ProductService : ProductService){}

 

  ngOnInit(): void {
    
     this._ProductService .getAllCategories().subscribe({
      next:(response)=>{console.log(response)
        this.allCategories = response.data
       
      },
      error:(err)=>{console.log(err)
    
      }
     })
  }

}
