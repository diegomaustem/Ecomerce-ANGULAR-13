import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
>>>>>>> ca0f16f3c20961196dd86a92c6883e671eeaf4d1

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(private service: ApiserviceService, private router:ActivatedRoute) { }

  getparamid:any;
  attributeProduct: any;

  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('id');
    this.service.listarProduto(this.getparamid).subscribe((res)=>{
        this.attributeProduct = res.data[0];
    });
>>>>>>> ca0f16f3c20961196dd86a92c6883e671eeaf4d1
  }

}
