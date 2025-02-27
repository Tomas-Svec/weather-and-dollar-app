import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Método para obtener el valor del dólar
  getDolar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dolar-bluepy`);
  }


  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/weather/${city}`);
  }

}
