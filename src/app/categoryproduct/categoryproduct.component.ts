import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css']
})
export class CategoryproductComponent  implements OnInit{
  isLoading:boolean = false
  categoryId:string|null = '';
  allProducts:Iproduct[] = []

  constructor(private _ProductService :ProductService , private _ActivatedRoute: ActivatedRoute ){}

ngOnInit(): void {
  this.isLoading = true,
  this ._ActivatedRoute.paramMap.subscribe((param)=>{
    this.categoryId = param.get("id");
    if(this.categoryId)
    {
      this._ProductService.productsByCategory(this.categoryId).subscribe({
        next:(response)=>{console.log(response)
        this.allProducts = response.data
        this.isLoading = false;
         
        },
        error :(err)=>{console.log(err)
          this.isLoading =false;
        }
      })
    }
  })
}



}
