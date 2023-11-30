import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';


const routes: Routes = [
    {path:"Alergias" , component:CrudComponent},
    {path: '', redirectTo: 'Alergias', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
