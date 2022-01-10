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
  success:any;
  getparamid:any;
  

  ngOnInit(): void {
      this.getparamid = this.router.snapshot.paramMap.get('id');
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res, 'res==>');  
        this.productForm.patchValue({
            nome:res.result.nome,
            imagem:res.result.imagem,
            descricao:res.result.descricao,
            estoque:res.result.estoque,
            status:res.result.status,
            preco:res.result.preco
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


  productSubmit()
  {
    if(this.productForm.valid)
    {
      this.service.inserirProduto(this.productForm.value).subscribe((res)=>{
        
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
          console.log(res,'resupdate');
      });
    }

  }

}
