import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformateurComponent } from './newformateur.component';

describe('NewformateurComponent', () => {
  let component: NewformateurComponent;
  let fixture: ComponentFixture<NewformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewformateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
