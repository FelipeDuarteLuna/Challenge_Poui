import { Component } from '@angular/core';
import { SelectComponent } from './shared/select/select.component';
import { SelectOption } from './models/selectOption';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchComponent } from './shared/switch/switch.component';
import { PoModule, PoPageModule } from '@po-ui/ng-components';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@Component({
  selector: 'app-root',
  imports: [ SelectComponent, SwitchComponent, FormsModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Choose an option';

  countries: SelectOption[] = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
    { value: 'opt5', label: 'Option 5' },
  ];

  selectedCountry: string = 'us';

  isDisabled: boolean = false;
  isDisabledSwitch: boolean = false;
  hasError: boolean = false;

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      country: [{ value: this.selectedCountry, disabled: this.isDisabled }],
    });
  }

  DisableSelect(): void {
    if (this.form.get('country')?.disabled) {
      this.form.get('country')?.enable();
      this.isDisabled = false;
    } else {
      this.form.get('country')?.disable();
      this.isDisabled = true;
    }
  }

  isActive = false;

  onSwitchToggle(event: boolean) {
    console.log('Switch mudou:', event);
  }

}
