import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  private userService = inject(UserService)
  private router = inject(Router)
  listProducts:any = [];
  isMovile: boolean = false;
  errorPoints: boolean = false;
  date:Date = new Date ;
  myPoints: Number | undefined;
  totalPoints: Number | undefined;
  
  ngOnInit() {

    window.scrollTo({top: 0, behavior: 'smooth'})

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

    this.userService. getTotalSummary(sessionStorage.getItem("userId")).subscribe({
      next: (response: any) => {
        if (response) {
          this.totalPoints = response.totalSuma
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
    this.userService.getCartData(sessionStorage.getItem("userId")).subscribe({
      next: (response: any) => {
        this.listProducts = response
      },
      error: (error) => {
      }
    })
  }

  deleteItem(item: any) {
    console.log(item);
    
    this.userService.deleteProduct(sessionStorage.getItem("userId"), item).subscribe({
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

      this.deleteItem(item.idProduct)
    }
    this.userService.CreateRedeemtion(data).subscribe({
      next: (response: any) => {
        console.log(response)
        this.router.navigate(["/mis-canjes"]);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
