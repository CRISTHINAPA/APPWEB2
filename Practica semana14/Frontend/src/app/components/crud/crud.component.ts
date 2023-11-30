import { Component, OnInit } from '@angular/core';
import { AlergiasService } from "../../services/Alergias.service";
import { Alergias } from "../../models/Alergias.models";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  datos: Alergias[] = [];
  AlergiasForm: FormGroup;
  UpdateAlergiasForm: FormGroup;
  AlergiasSeleccionado: any = null;
  buscarTexto: string = '';

  constructor(
    private AlergiasService: AlergiasService,
    private formbuilder: FormBuilder
  ) {
    this.AlergiasForm = this.formbuilder.group({
      nombreAlergia: ['', Validators.required],
      detalleTratamiento: ['', Validators.required],
      
     
    });

    this.UpdateAlergiasForm = this.formbuilder.group({
      id: ['', Validators.required],
      nombreAlergia: ['', Validators.required],
      detalleTratamiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this.AlergiasService.getAllData().subscribe(datos => {
      this.datos = datos;
    });
  }


  AgregarDatos() {
    if (this.AlergiasForm.valid) {
      // Obtener los datos del formulario
      let paciente = this.AlergiasForm.value;
  
      // Convertir AlergiasId a número si existe
      paciente = {
        ...paciente,
        AlergiasId: paciente.AlergiasId ? parseInt(paciente.AlergiasId, 10) : null
      };
  
      // Enviar la solicitud al backend
      this.AlergiasService.postData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.AlergiasForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }
  

  EliminarDatos(id: any) {
    this.AlergiasService.deleteData(id).subscribe(response => {
      console.log('Cita médica eliminada exitosamente:', response);
      this.ObtenerDatos();
    });
  }

  UpdateDatos() {
    if (this.UpdateAlergiasForm.valid) {
      const paciente = this.UpdateAlergiasForm.value;
      this.AlergiasService.updateData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.UpdateAlergiasForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }

  ObtenerDatosE(datoO: Alergias) {
    this.AlergiasSeleccionado = datoO;
    console.log(this.AlergiasSeleccionado.id);
    this.UpdateAlergiasForm.patchValue(datoO);
  }
}
