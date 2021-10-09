import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      tanggal: '2021-10-08',
      nomor: 1,
      nama: 'Wahyu',
      umur: 25,
      alamat: 'jl. Ciracas',
      nohp: '+628123456789',
    },
    {
      id: 2,
      tanggal: '2021-10-08',
      nomor: 2,
      nama: 'Jhon',
      umur: 21,
      alamat: 'jl. Subur',
      nohp: '+628123452246',
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
    oldCustomer.tanggal = customer.tanggal;
    oldCustomer.nomor = customer.nomor;
    oldCustomer.nama = customer.nama;
    oldCustomer.umur = customer.umur;
    oldCustomer.alamat = customer.alamat;
    oldCustomer.nohp = customer.nohp;
  }
}
