import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  id: number;
  nomor: number;
  header: string;
  customers: Customer[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerServices: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerServices.onGet();
  }

  onSubmit(form: NgForm) {
    let customer: Customer = {
      id: form.value.id,
      kategori: form.value.kategori,
      nomor: form.value.nomor,
      nama: form.value.nama,
      umur: form.value.umur,
      alamat: form.value.alamat,
      nohp: form.value.nohp,
    };

    this.customerServices.onAdd(customer);
    this.router.navigateByUrl('request-queue-number');
  }
}
