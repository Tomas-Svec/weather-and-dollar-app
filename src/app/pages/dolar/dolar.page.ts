import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonButton, IonCard, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dolar',
  templateUrl: 'dolar.page.html',
  styleUrls: ['dolar.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCard, IonButton, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class DolarPage {
  dolarData: any = null; // Almacena los datos del dólar
  errorMessage: string = ''; // Mensaje de error
  isLoading: boolean = false; // Indicador de carga

  constructor(private apiService: ApiService) {} // Inyecta el servicio

  // Función para consultar el valor del dólar
  getDolar() {
    this.errorMessage = ''; // Limpiar mensajes de error
    this.isLoading = true; // Activar indicador de carga

    // Llama al método del servicio
    this.apiService.getDolar().subscribe(
      (data: any) => {
        this.dolarData = data; // Guardar los datos recibidos
        this.isLoading = false; // Desactivar indicador de carga
      },
      (error) => {
        this.errorMessage = 'Error al obtener el valor del dólar.';
        this.isLoading = false; // Desactivar indicador de carga
      }
    );
  }
}
