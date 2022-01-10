import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( private _http:HttpClient ) { }


  // Conexão frontend com backend

  apiUrl = 'http://localhost:3000/produto';
  apiUrll = 'http://localhost:3000/produtos';

 
  listarProduto(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  listarTodos():Observable<any>
  {
    return this._http.get(`${this.apiUrll}`);
  }

  inserirProduto(product:any):Observable<any> 
  {
    return this._http.post(`${this.apiUrl}`, product);
  }

  alterarProduto(product:any, id:any):Observable<any>
  { 
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,product);
  }

  excluirProduto(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  /*getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }*/



}
