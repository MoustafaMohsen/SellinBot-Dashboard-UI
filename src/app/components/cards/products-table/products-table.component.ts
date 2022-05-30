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
    });
    this.productForm = fb.group({
      name: [''],
      description: [''],
      price: [''],
      image_url: [''],
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
    if(p.image_url)this.productForm.get("image_url").setValue(p.image_url)
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
    let image_url = this.productForm.get("image_url").value
    let new_product:IProduct = {}
    if(name) new_product.name = name
    if(description) new_product.description = description
    if(image_url) new_product.image_url = image_url
    if(price) new_product.price = price
    new_product.products_id = this.currentProduct?.products_id
    let old_product = {
      products_id:new_product.products_id
    }
    this.data.updateProduct({new_product,old_product}).subscribe(r => {
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

