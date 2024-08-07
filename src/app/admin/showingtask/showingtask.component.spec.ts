import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingtaskComponent } from './showingtask.component';

describe('ShowingtaskComponent', () => {
  let component: ShowingtaskComponent;
  let fixture: ComponentFixture<ShowingtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowingtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowingtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
