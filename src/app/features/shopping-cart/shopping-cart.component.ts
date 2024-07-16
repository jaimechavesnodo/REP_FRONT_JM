import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  isMovile : boolean = false; 
  
  ngOnInit() {
    console.log(window.innerWidth)

    if (window.innerWidth < 768) {
      this.isMovile = true;
    }
  }
}
