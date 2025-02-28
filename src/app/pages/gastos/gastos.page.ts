import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToggle } from '@ionic/angular/standalone';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
  standalone: true,
  imports: [IonToggle, 
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class GastosPage{
  currentInput = ''; // Entrada de datos de la calculadora.
  history: { operation: string; result: string }[] = []; // Historial de operaciones
  displayedColumns: string[] = ['operation', 'result']; // Columnas de la tabla

  toggleDarkMode(isDarkMode: boolean) {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  appendNumber(number: string) {
    this.currentInput += number;
  }

  appendOperator(operator: string) {
    // Evitamos añadir más de un operador consecutivo.
    if (this.currentInput && !['+', '-', '*', '/'].includes(this.currentInput.slice(-1))) {
      this.currentInput += operator;
    }
  }

  clear() {
    this.currentInput = '';
  }

  deleteLast() {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  calculate() {
    try {
      const result = eval(this.currentInput); // Evalúa la expresión
      const newOperation = { operation: this.currentInput, result: result.toString() };
      // Reasignamos el array para actualizar el dataSource del mat-table
      this.history = [...this.history, newOperation];
      this.currentInput = result.toString();
    } catch (error) {
      this.currentInput = 'Error';
    }
  }

  // Método para capturar eventos del teclado
  onKeyDown(event: KeyboardEvent) {
    // Permitir: dígitos, punto, operadores, paréntesis
    const allowedKeys = /[0-9+\-*/().]/;
    
    if (event.key === 'Enter') {
      this.calculate();
      event.preventDefault();
    } else if (event.key === 'Backspace') {
      this.deleteLast();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.clear();
      event.preventDefault();
    } else if (allowedKeys.test(event.key)) {
      // Se puede agregar lógica extra para evitar operadores consecutivos, etc.
      this.currentInput += event.key;
      event.preventDefault();
    } else {
      // Se pueden permitir otras teclas (como las flechas) sin interferir
    }
  }

}
