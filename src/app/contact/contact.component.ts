import { Component } from '@angular/core';
import { Star2Component } from "../star2/star2.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Star2Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
