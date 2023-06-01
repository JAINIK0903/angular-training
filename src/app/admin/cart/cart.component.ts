import { Component, Input } from '@angular/core';
//Service
import { CartService } from 'src/app/services/cart.service';
//Interface
import { ICart } from 'src/app/interfaces/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() cart!: ICart;
  public cartList: ICart[] = [];
  public isFetching: boolean = true;
  public isError: boolean = false;
  constructor(private cartService: CartService) { }



}
