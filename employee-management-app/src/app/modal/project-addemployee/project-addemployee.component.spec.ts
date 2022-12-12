import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddemployeeComponent } from './project-addemployee.component';

describe('ProjectAddemployeeComponent', () => {
  let component: ProjectAddemployeeComponent;
  let fixture: ComponentFixture<ProjectAddemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAddemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
