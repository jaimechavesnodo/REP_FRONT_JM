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

    if (window.innerWidth < 768) {
      this.isMovile = true;
    }

    this.userService.getPointClient(sessionStorage.getItem("userId")).subscribe({
      next: (response: any) => {
        if (response) {
          this.myPoints = response.pointsCurrent;
        } else {
          this.myPoints = 0;
        }
      },
      error: (error) => {
      }
    })

    this.getCartproduct()
  }

  getCartproduct(){
    this.userService.getCartData(sessionStorage.getItem("userId"), 22).subscribe({
      next: (response: any) => {
        this.listProducts = response
      },
      error: (error) => {
      }
    })
  }

  deleteItem(item: any) {
    this.userService.deleteProduct(sessionStorage.getItem("userId"), item.idProduct).subscribe({
      next: (response: any) => {
        this.getCartproduct()
        this.errorPoints = false;
      },
      error: (error) => {
      }
    })
  }

  CreateRedeemtion(){
    
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
    this.userService.CreateRedeemtion(data).subscribe({
      next: (response: any) => {
      },
      error: (error) => {
        this.errorPoints = true;
      }
    })
  }
}
