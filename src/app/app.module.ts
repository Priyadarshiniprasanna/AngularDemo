import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EngineerEditComponent } from './engineer-edit/engineer-edit.component';
import { RoleListComponent } from './role-list/role-list.component';
import { AppRoutingModule } from './app-routing.module';
import {EngineerListComponent} from "./engineer-list/engineer-list.component";
// ... other imports
@NgModule({
  declarations: [
    // other components
    EngineerEditComponent,
    RoleListComponent,
    EngineerListComponent
  ],
  imports: [
    // other modules
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [/* AppComponent or other bootstrap component */]
})
export class AppModule { }
