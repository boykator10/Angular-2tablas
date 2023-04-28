import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPadreComponent } from './eliminar-padre.component';

describe('EliminarPadreComponent', () => {
  let component: EliminarPadreComponent;
  let fixture: ComponentFixture<EliminarPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
