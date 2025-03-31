import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchComponent, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the checked state when clicked', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.click();
    fixture.detectChanges();
    expect(component.checked).toBeTrue();
    inputElement.click();
    fixture.detectChanges();
    expect(component.checked).toBeFalse();
  });

  it('should emit checkedChange event when toggled', () => {
    spyOn(component.checkedChange, 'emit');
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.click();
    fixture.detectChanges();
    expect(component.checkedChange.emit).toHaveBeenCalledWith(true);
    inputElement.click();
    fixture.detectChanges();
    expect(component.checkedChange.emit).toHaveBeenCalledWith(false);
  });

  it('should not toggle when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.click();
    fixture.detectChanges();
    expect(component.checked).toBeFalse();
  });

  it('should respond to Enter and Space keydown events', () => {
    const switchLabel = fixture.nativeElement.querySelector('label');
    const eventEnter = new KeyboardEvent('keydown', { key: 'Enter' });

    switchLabel.dispatchEvent(eventEnter);
    fixture.detectChanges();
    expect(component.checked).toBeTrue();
  });

});
