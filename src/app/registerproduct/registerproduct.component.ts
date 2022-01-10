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
  getparamid:any;

  
  event:any;
  

  ngOnInit(): void {
      this.getparamid = this.router.snapshot.paramMap.get('id');
      this.service.listarProduto(this.getparamid).subscribe((res)=>{
        this.productForm.patchValue({
            nome:res.data[0].nome,
            imagem:res.data[0].imagem,
            descricao:res.data[0].descricao,
            estoque:res.data[0].estoque,
            status:res.data[0].status,
            preco:res.data[0].preco
        });
      });
  }

  public isChecked = 1;
  
  productForm = new FormGroup({

    'nome' : new FormControl('', Validators.required),
    'imagem' : new FormControl('', Validators.required),
    'descricao' : new FormControl('', Validators.required),
    'estoque' : new FormControl('', Validators.required),
    'status' : new FormControl('', Validators.required),
    'preco' : new FormControl('', Validators.required)
   
  });

  onchange(){
    console.log()
  }


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


  productUpdate()
  {
    if(this.productForm.valid)
    {
      this.service.alterarProduto(this.productForm.value, this.getparamid).subscribe((res)=>{
          this.successmsg = res.message;
      });
    }
    else
    {
          this.errormsg = 'O produto não pode ser alterado.'
    }

  }

}
