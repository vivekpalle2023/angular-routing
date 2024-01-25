import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  panelOpenState = false;

  constructor(private auth: AuthService){
    
  }

}
