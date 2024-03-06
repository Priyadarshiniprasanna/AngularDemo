import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-engineer-edit',
  templateUrl: './engineer-edit.component.html',
  styleUrls: ['./engineer-edit.component.css']
})
export class EngineerEditComponent implements OnInit {
  engineerForm: FormGroup = new FormGroup({}); // initializing with an empty FormGroup

  constructor() { }

  ngOnInit(): void {
    // Define the structure of the form here
    this.engineerForm = new FormGroup({
      'name': new FormControl(null, Validators.required), // Name field with required validation
      'address': new FormControl(null, Validators.required), // Address field with required validation
      'roles': new FormGroup({ // Nested FormGroup for roles
        'role1': new FormControl(null), // Role 1 field
        'role2': new FormControl(null)  // Role 2 field
      })
    });
  }

  onSubmit() {
    console.log(this.engineerForm.value); // Log form values to console on submit
    // Further processing of form data goes here
  }
}
