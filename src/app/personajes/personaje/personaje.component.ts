import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes-personaje',
  standalone: false,
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})



export class PersonajeComponent {
  public nombre: string = 'Jona';
  public edad: number = 44;

  get mensaje(): string {
    return this.nombre.toUpperCase();
  }

  get concatenar(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Superman';
  }

  resetear(): void {
    this.nombre = 'Jona';
    this.edad = 44;
  }
  cambiarEdad() {
    this.edad = 20; // O cualquier otra lógica
  }
  
}
