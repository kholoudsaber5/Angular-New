import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productsList:Iproduct[] , searchTerm:String): Iproduct[] {
    return productsList.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase())) 
  }

}
