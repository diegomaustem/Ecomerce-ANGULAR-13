import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  listProducts:any;

  ngOnInit(): void {
    this.service.listarTodos().subscribe((res)=>{
      console.log(res,"res==>");

      this.listProducts = res.result;
    });
  }

}
