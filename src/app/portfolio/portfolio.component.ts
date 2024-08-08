import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { Star2Component } from "../star2/star2.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, Star2Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  imgs:string[] = [
    '../../assets/imgs/poert1.png',
    '../../assets/imgs/port2.png',
    '../../assets/imgs/port3.png',
    '../../assets/imgs/poert1.png',
    '../../assets/imgs/port2.png',
    '../../assets/imgs/port3.png'
  ]
  Changeimg(item:string):void{
    this.nowImge=item;
    console.log(this.nowImge);
    document.querySelector(".layer2")?.classList.remove("d-none")
  }
  nowImge:string="";

  Hodeimg():void{
    document.querySelector(".layer2")?.classList.add("d-none")
  }
  Stayimg():void{
    document.querySelector(".layer2")?.classList.remove("d-none")
  }

}
