import { Component, forwardRef, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../../models/selectOption';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() options: SelectOption[] = [];
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;

  isOpen: boolean = false;
  value!: string;
  selectedLabel: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.selectedLabel =
      this.options?.find((option) => option.value === value)?.label ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(option: SelectOption): void {
    this.value = option.value;
    this.selectedLabel = option.label;
    this.isOpen = false;
    this.onChange(this.value);
    this.onTouched();
  }
}
