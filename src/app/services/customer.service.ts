import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      noantrian: 'AA0001',
      kategori: 'Antrian Apotik',
      nama: 'wahyu',
      umur: 25,
      alamat: 'jl. ciracas',
      nohp: '08123456789',
    },
  ];
  constructor() {}

  onGet() {
    return this.customers;
  }

  onGetCustomer(id: Number) {
    return this.customers.find((x) => x.id === id);
  }

  onAdd(customer: Customer) {
    this.customers.push(customer);
  }

  onDelete(id: Number) {
    let customer = this.customers.find((x) => x.id === id);
    let index = this.customers.indexOf(customer, 0);
    this.customers.splice(index, 1);
  }

  onUpdate(customer: Customer) {
    let oldCustomer = this.customers.find((x) => x.id === customer.id);
    oldCustomer.kategori = customer.kategori;
    oldCustomer.nama = customer.nama;
    oldCustomer.umur = customer.umur;
    oldCustomer.alamat = customer.alamat;
    oldCustomer.nohp = customer.nohp;
  }
}
