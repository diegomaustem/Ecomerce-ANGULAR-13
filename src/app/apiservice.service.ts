import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( private _http:HttpClient ) { }


  // Conexão frontend com backend

  apiUrl = 'http://localhost:3000/api/produtos';

  listarTodos():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);

  }
}
