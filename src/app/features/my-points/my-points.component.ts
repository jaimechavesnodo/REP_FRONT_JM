import { Component, inject } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-my-points',
  standalone: true,
  imports: [],
  templateUrl: './my-points.component.html',
  styleUrl: './my-points.component.scss'
})
export class MyPointsComponent {

  private userService = inject(UserService)
  myPoints: Number | undefined;
  PointsMonth: Number | undefined;
  pointsToExpire: Number | undefined;
  lastMonth:any;
  currentMonth:any;

  ngOnInit() {
    this.userService.getPointClient(localStorage.getItem("UMalucelli")).subscribe({
      next: (response: any) => {
        console.log(response)
        if (response) {
          this.myPoints = response.pointsCurrent;
          this.PointsMonth = response.PointsAccumulatedPreviousMonth;
          this.pointsToExpire = response.pointsToExpire;
        } else {
          this.myPoints = 0;
          this.PointsMonth = 0;
          this.pointsToExpire = 0;
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  
    this.getMes();
  }

  getMes() {
    const currentDate = new Date();
    const currentMonth = new Date(currentDate.setMonth(currentDate.getMonth()));
    const lastMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    this.lastMonth = lastMonth.toLocaleDateString('es-ES', options);
    this.currentMonth = currentMonth.toLocaleDateString('es-ES', options);
  }

}
