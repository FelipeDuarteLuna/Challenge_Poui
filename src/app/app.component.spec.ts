import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SelectComponent } from './shared/select/select.component';
import { SwitchComponent } from './shared/switch/switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, SelectComponent, SwitchComponent, ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'Challenge_Poui' title`, () => {
    expect(component.title).toEqual('Choose an option');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Component Select');
  });

  it('should toggle the select component disabled state', () => {
    const button = fixture.nativeElement.querySelector('#toggle-select');
    button.click();
    fixture.detectChanges();
    expect(component.isDisabled).toBeTrue();
    button.click();
    fixture.detectChanges();
    expect(component.isDisabled).toBeFalse();
  });

  it('should toggle the switch component state', () => {
    const switchInput = fixture.debugElement.nativeElement.querySelector('app-switch input');
    switchInput.click();
    fixture.detectChanges();
    expect(component.isActive).toBeTrue();
    switchInput.click();
    fixture.detectChanges();
    expect(component.isActive).toBeFalse();
  });

  it('should toggle the error state of the select component', () => {
    const buttonError = fixture.nativeElement.querySelector('.buttonError');
    buttonError.click();
    fixture.detectChanges();
    expect(component.hasError).toBeTrue();
    buttonError.click();
    fixture.detectChanges();
    expect(component.hasError).toBeFalse();
  });
});
