import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alergias } from '../models/Alergias.models';


@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  private baseURL = `http://localhost:3000/api`

  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<Alergias[] >(`${this.baseURL}/Alergias`)
  }
  postData(Alergias: Alergias): Observable<any> {
    return this.http.post<Alergias>(`${this.baseURL}/Alergias`, Alergias)
  }
  updateData(Alergias: Alergias): Observable<any> {
    return this.http.put<Alergias>(`${this.baseURL}/Alergias/${Alergias.id}`, Alergias)
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/Alergias/${id}`)
}
}