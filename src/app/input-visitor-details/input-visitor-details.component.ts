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
      tanggal: form.value.tanggal,
      nomor: form.value.nomor,
      nama: form.value.nama,
      umur: form.value.umur,
      alamat: form.value.alamat,
      nohp: '+62' + form.value.nohp,
    };

    this.customerServices.onAdd(customer);
    console.log(customer);

    this.router.navigateByUrl('request-queue-number');
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
