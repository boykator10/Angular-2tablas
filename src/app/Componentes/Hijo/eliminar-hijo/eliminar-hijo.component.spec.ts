import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHijoComponent } from './eliminar-hijo.component';

describe('EliminarHijoComponent', () => {
  let component: EliminarHijoComponent;
  let fixture: ComponentFixture<EliminarHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
