import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-registerproduct',
  templateUrl: './registerproduct.component.html',
  styleUrls: ['./registerproduct.component.css']
})
export class RegisterproductComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;


  ngOnInit(): void {
    
  }

  productForm = new FormGroup({

    'nome' : new FormControl('', Validators.required),
    'imagem' : new FormControl('', Validators.required),
    'descricao' : new FormControl('', Validators.required),
    'estoque' : new FormControl('', Validators.required),
    'status' : new FormControl('', Validators.required),
    'preco' : new FormControl('', Validators.required)
  });



  productSubmit()
  {
    if(this.productForm.valid)
    {
      this.service.inserirProduto(this.productForm.value).subscribe((res)=>{
        this.productForm.reset();
        this.successmsg = res.message;
      });

    }
    else
    {
     this.errormsg = 'Não foi possivel cadastrar o produto. Preencha todos os campos!';
     
    } 
    
  }


}
