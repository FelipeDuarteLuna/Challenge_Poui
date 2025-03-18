import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent, CommonModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the dropdown when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.select-button');
    button.click();
    fixture.detectChanges();
    expect(component.isOpen).toBeTrue();
    button.click();
    fixture.detectChanges();
    expect(component.isOpen).toBeFalse();
  });

  it('should not toggle the dropdown when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.select-button');
    button.click();
    fixture.detectChanges();

    expect(component.isOpen).toBeFalse();
  });

  it('should select an option when clicked', () => {
    component.options = [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' }
    ];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.select-button');
    button.click();
    fixture.detectChanges();

    const option = fixture.nativeElement.querySelectorAll('.select-dropdown li')[0];
    option.click();
    fixture.detectChanges();

    expect(component.value).toBe('opt1');
    expect(component.selectedLabel).toBe('Option 1');
    expect(component.isOpen).toBeFalse();
  });

  it('should emit onChange and onTouched when an option is selected', () => {
    spyOn(component, 'onChange');
    spyOn(component, 'onTouched');

    component.options = [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' }
    ];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.select-button');
    button.click();
    fixture.detectChanges();

    const option = fixture.nativeElement.querySelectorAll('.select-dropdown li')[0];
    option.click();
    fixture.detectChanges();

    expect(component.onChange).toHaveBeenCalledWith('opt1');
    expect(component.onTouched).toHaveBeenCalled();
  });

});
