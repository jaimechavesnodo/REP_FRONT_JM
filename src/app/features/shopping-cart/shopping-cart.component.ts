import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  private userService = inject(UserService)
  listProducts:any = [];
  isMovile: boolean = false;
  errorPoints: boolean = false;
  date:Date = new Date ;
  myPoints: Number | undefined;
  
  ngOnInit() {
    console.log(window.innerWidth)
    console.log(this.listProducts.length);

    if (window.innerWidth < 768) {
      this.isMovile = true;
    }

    this.userService.getPointClient(localStorage.getItem("UMalucelli")).subscribe({
      next: (response: any) => {
        console.log(response)
        if (response) {
          this.myPoints = response.pointsCurrent;
        } else {
          this.myPoints = 0;
        }
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.getCartproduct()
  }

  getCartproduct(){
    this.userService.getCartData(localStorage.getItem("UMalucelli")).subscribe({
      next: (response: any) => {
        console.log(response)
        this.listProducts = response
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  deleteItem(item: any) {
    this.userService.deleteProduct(localStorage.getItem("UMalucelli"), item.idProduct).subscribe({
      next: (response: any) => {
        console.log(response)
        this.getCartproduct()
        this.errorPoints = false;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  CreateRedeemtion(){
    console.log("enter");
    
    const data = []
    for (let item of this.listProducts) {
      data.push(
        {
          orderName: item.description,
          redemptionDate: this.date.toLocaleDateString(),
          pointsProduct: item.total,
          idUser: item.idUser
        }
      )
    }
    console.log(data)
    this.userService.CreateRedeemtion(data).subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
        this.errorPoints = true;
      }
    })
  }
}
