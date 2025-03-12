import { Component } from '@angular/core';
import { SelectComponent } from './shared/select/select.component';
import { SelectOption } from './models/selectOption';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SelectComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Componente Campo Select - Challenge_Poui';

  countries: SelectOption[] = [
    { value: 'brazil', label: 'Brazil' },
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' }
  ];

  selectedCountry: string = 'us';

  isDisabled: boolean = true;

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      country: [{ value: this.selectedCountry, disabled: this.isDisabled }]
    });
  }
}
