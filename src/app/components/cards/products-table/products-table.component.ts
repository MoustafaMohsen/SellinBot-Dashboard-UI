import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IProduct } from "src/app/interfaces/product";
import { DataService } from "src/app/services/data/data.service";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-products-table",
  templateUrl: "./products-table.component.html",
})
export class ProductsTableComponent implements OnInit, AfterViewInit {
  collapseShow = "hidden";

  constructor(private data: DataService, fb: FormBuilder) {
    this.newProduct = fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      image_url: [''],
      file: [''],
    });
  }
  newProduct: FormGroup
  products:IProduct[] = []

  modal: ModalService;
  modal2: ModalService;

  ngOnInit(): void {
    this.getProducts()
  }

  ngAfterViewInit(): void {
    this.modal = new ModalService(".add-product-modal")
    this.modal2 = new ModalService(".edit-product-modal")
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  getProducts() {
    this.data.getProducts().subscribe(r => {
      this.products = r.data
      console.log(this.products);

    })
  }

  createProduct() {
    if (this.newProduct.invalid) {
      return;
    }
    let product:IProduct = {
      name:this.newProduct.get("name").value,
      description:this.newProduct.get("description").value,
      price:this.newProduct.get("price").value,
    }
    this.data.createProduct(product).subscribe(r => {
      console.log(r);
    })
  }
}

