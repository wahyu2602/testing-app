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
  header: string;
  customer: Customer = {
    id: 0,
    kategori: '',
    noantrian: '',
    nama: '',
    umur: 0,
    alamat: '',
    nohp: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Customer' : 'Edit Customer';
    if (this.id != 0) {
      this.customer = this.customerService.onGetCustomer(this.id);
    }
  }

  onSubmit(form: NgForm) {
    let customer: Customer = {
      id: form.value.id,
      kategori: form.value.kategori,
      noantrian: form.value.noantrian,
      nama: form.value.nama,
      umur: form.value.umur,
      alamat: form.value.alamat,
      nohp: form.value.nohp,
    };

    if (this.id === 0) {
      this.customerService.onAdd(customer);
    } else {
      this.customerService.onUpdate(customer);
    }
    this.router.navigateByUrl('');
  }
}
