import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usa-covid-statistic';
  submitted = false;
  fecha: any = {}; // objeto para almacenar el modelo de datos
  datosObtenidos: any;

  constructor(public httpService: HttpClient) {
    // inicializar el modelo con la fecha actual
  }

  public searchInfo() {
    console.log(this.fecha.replace(/-/g, ''));

    this.httpService.get(`https://api.covidtracking.com/v1/us/${this.fecha.replace(/-/g, '')}.json`).subscribe((response:any) =>{
      if (response) {
        this.datosObtenidos= response;
      }
    }, (errorResponse)=>{
      if (errorResponse?.error) {
        alert('Datos no encontrados en nuestra base de datos, seleccione una fecha diferente.')
      }
    });

  }


}
