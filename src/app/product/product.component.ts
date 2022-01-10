import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ApiserviceService, private router:ActivatedRoute) { }

  getparamid:any;
  attributeProduct: any;

  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('id');
    this.service.listarProduto(this.getparamid).subscribe((res)=>{
        this.attributeProduct = res.data[0];
    });
  }

}
