import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlocalComponent } from './editlocal.component';

describe('EditlocalComponent', () => {
  let component: EditlocalComponent;
  let fixture: ComponentFixture<EditlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditlocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
