import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  allProducts:any;

  ngOnInit(): void {
    this.listarTodos();
  }


  listarTodos()
  {
    this.service.listarTodos().subscribe((res)=>{
      this.allProducts = res.data;
    });
  }


}
