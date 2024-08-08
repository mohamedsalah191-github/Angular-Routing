import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { StarComponent } from "../star/star.component";

interface product {
  productName:string,
  productPrice:number,
  productImage:string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgFor, StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  hambozo:string = "ahmed";

 productList:product[] =[
  {productName:"sony" , productPrice:3000 , productImage:"../../assets/imgs/1.jpg"},
  {productName:"samsung" , productPrice:5000 , productImage:"../../assets/imgs/2.jpg"},
  {productName:"iphone" , productPrice:4000 , productImage:"../../assets/imgs/3.jpg"}
 ]

//  if
role:string = "isAdmin"

 
}
