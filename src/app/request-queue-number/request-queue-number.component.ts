import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  customers: Customer[];
  constructor(
    private router: Router,
    private customerServices: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerServices.onGet();
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
