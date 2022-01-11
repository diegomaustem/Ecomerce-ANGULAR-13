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
  successmsg:any;

  ngOnInit(): void {
    this.listarTodos();
  }

  excluirProduto(id:any)
  {
    this.service.excluirProduto(id).subscribe((res)=>{
        this.listarTodos();
        this.successmsg = 'Produto deletado com sucesso.';
    });
  }

  listarTodos()
  {
    this.service.listarTodos().subscribe((res)=>{
      this.listProducts = res.data;
    });
  }


}
