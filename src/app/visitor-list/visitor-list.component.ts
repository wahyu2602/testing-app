import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  customers: Customer[];
  constructor(
    private router: Router,
    private customerServices: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerServices.onGet();
  }

  onDelete(id: Number) {
    this.customerServices.onDelete(id);
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
