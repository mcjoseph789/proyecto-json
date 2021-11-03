
import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class Datatable {
  displayedColumns: string[] = ['fecha_reporte_web', 'ciudad_municipio_nom', 'edad', 'sexo', 'fuente_tipo_contagio', 'estado', 'pais_viajo_1_nom', 'recuperado' ];
  dataSource:any=null;
  datos:any=null;

  constructor(private http: HttpClient){

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.http.get("https://www.datos.gov.co/resource/gt2j-8ykr.json")
      .subscribe(
        (result:any) => {
          this.datos = result;
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          console.log(this.datos);
        },
        error => {
          console.log(`Conexión fallida: ${error}`);
        }
      );
  }
  replace(fecha:string){
    return fecha.replace(" 0:00:00","")
  }
  vacios(vacio:string){
    if(vacio==""){
      return "No viajó."
    }
    return vacio
  }
}
