import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerEditComponent } from './engineer-edit/engineer-edit.component';
// import other components as needed
const routes: Routes = [
  { path: 'engineers', component: EngineerListComponent },
  { path: 'edit-engineer', component: EngineerEditComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/engineers', pathMatch: 'full' } // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
