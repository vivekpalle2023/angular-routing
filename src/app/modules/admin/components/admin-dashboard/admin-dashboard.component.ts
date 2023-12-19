import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule, HeaderComponent,FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
