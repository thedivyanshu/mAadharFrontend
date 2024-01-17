import { Component, OnInit } from '@angular/core';
import { Admin, Citizen } from '../classes';
import { AadharService } from '../aadhar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  showOptions = true;
  showAdminForm = false;
  showCitizenForm = false;
  message = '';
  admin: Admin = new Admin();
  citizen: Citizen = new Citizen();
  constructor(private service: AadharService, private router: Router) {}
  ngOnInit(): void {}
  public adminForm(): void {
    this.router.navigate(['/admin']);
  }
  public citizenForm(): void {
    this.router.navigate(['/citizen']);
  }
}
