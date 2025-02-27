import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClimaPage{

  weatherData: any = null;
  errorMessage: string = '';
  isLoading: boolean = false;
city: any;

  constructor(private apiService: ApiService) { }

  getWeather(city: string) {
    this.errorMessage = '';
    this.isLoading = true;

    this.apiService.getWeather(city).subscribe(
      (data: any) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error al obtener el clima.';
        this.isLoading = false;
      }
    );
  }

}
