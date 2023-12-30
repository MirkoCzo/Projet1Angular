import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformateurComponent } from './editformateur.component';

describe('EditformateurComponent', () => {
  let component: EditformateurComponent;
  let fixture: ComponentFixture<EditformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditformateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
