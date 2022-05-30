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
    this.productForm = fb.group({
      name: [''],
      description: [''],
      price: [''],
      image_url: [''],
      file: [''],
    });
  }
  newProduct: FormGroup
  productForm: FormGroup
  products:IProduct[] = []
  currentProduct:IProduct
  modal: ModalService;
  modal2: ModalService;
  text=""

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
      this.text = "Invalid inputs"
      setTimeout(() => {
        this.text = ""
      }, 10000);
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

  viewProduct(p:IProduct){
    this.currentProduct = p
    this.productForm.get("name").setValue(p.name)
    this.productForm.get("price").setValue(p.price)
    this.productForm.get("description").setValue(p.description)
    this.modal2.openModal()
  }
  editProduct() {
    if (this.productForm.invalid) {
      this.text = "Invalid inputs"
      setTimeout(() => {
        this.text = ""
      }, 10000);
      return;
    }
    let name = this.productForm.get("name").value
    let description = this.productForm.get("description").value
    let price = this.productForm.get("price").value
    let file = this.productForm.get("file").value
    let product:IProduct = {}
    if(name) product.name = name
    if(description) product.description = description
    if(price) product.price = price
    product.products_id = this.currentProduct?.products_id
    this.data.updateProduct(product).subscribe(r => {
      console.log(r);
      this.getProducts();
      this.modal2.closeModal();
    })
  }
  deleteProduct(){
    let product:IProduct = {}
    product.products_id = this.currentProduct?.products_id
    this.data.deleteProduct(product).subscribe(r => {
      console.log(r);
      this.getProducts();
      this.modal2.closeModal();
    })
  }
}

