import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit{
  isLogedUser:boolean = false;

  numOfCartItems:number=0;

constructor (private _AuthService : AuthService , private _CartService : CartService ){}
  



  logout(){
this._AuthService.logout()
  }
ngOnInit() {
 this._AuthService.isLoginSubgect.subscribe ((islogged)=>{this.isLogedUser = islogged})
  this._CartService.cartItemsNum.subscribe({
    next:(num)=>{this.numOfCartItems = num}
  })
}

}



